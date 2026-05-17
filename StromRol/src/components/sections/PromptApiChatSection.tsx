import { useEffect, useMemo, useRef, useState } from "react";
import "../../App.css";

type PromptApiChatSectionProps = {
  isActive: boolean;
};

type ChatRole = "user" | "assistant";

type ChatMessage = {
  id: number;
  role: ChatRole;
  content: string;
};

type PromptSession = {
  prompt: (input: string) => Promise<string>;
  destroy?: () => Promise<void> | void;
  close?: () => Promise<void> | void;
};

type LanguageExpectation = {
  type: "text";
  languages: string[];
};

type LanguageModelRequestOptions = {
  expectedInputs?: LanguageExpectation[];
  expectedOutputs?: LanguageExpectation[];
};

type LegacyPromptAiApi = {
  canCreateTextSession: () => Promise<string>;
  createTextSession: () => Promise<PromptSession>;
};

type LanguageModelApi = {
  availability: (options?: LanguageModelRequestOptions) => Promise<string>;
  create: (options?: LanguageModelRequestOptions) => Promise<PromptSession>;
};

type PromptProvider = {
  providerName: "LanguageModel" | "window.ai";
  availability: () => Promise<string>;
  createSession: () => Promise<PromptSession>;
};

const PROMPT_LANGUAGE_OPTIONS: LanguageModelRequestOptions = {
  expectedInputs: [{ type: "text", languages: ["es"] }],
  expectedOutputs: [{ type: "text", languages: ["es"] }],
};

function getLegacyPromptAiApi(): LegacyPromptAiApi | null {
  const ai = (window as Window & { ai?: unknown }).ai;
  if (!ai || typeof ai !== "object") {
    return null;
  }

  const maybeApi = ai as Partial<LegacyPromptAiApi>;
  if (
    typeof maybeApi.canCreateTextSession === "function" &&
    typeof maybeApi.createTextSession === "function"
  ) {
    return maybeApi as LegacyPromptAiApi;
  }

  return null;
}

function getLanguageModelApi(): LanguageModelApi | null {
  const lm = (window as Window & { LanguageModel?: unknown }).LanguageModel;
  if (!lm || (typeof lm !== "object" && typeof lm !== "function")) {
    return null;
  }

  const maybeApi = lm as Partial<LanguageModelApi>;
  if (typeof maybeApi.availability === "function" && typeof maybeApi.create === "function") {
    return maybeApi as LanguageModelApi;
  }

  return null;
}

function getPromptProvider(): PromptProvider | null {
  const languageModel = getLanguageModelApi();
  if (languageModel) {
    return {
      providerName: "LanguageModel",
      availability: () => languageModel.availability(PROMPT_LANGUAGE_OPTIONS),
      createSession: () => languageModel.create(PROMPT_LANGUAGE_OPTIONS),
    };
  }

  const legacy = getLegacyPromptAiApi();
  if (legacy) {
    return {
      providerName: "window.ai",
      availability: () => legacy.canCreateTextSession(),
      createSession: () => legacy.createTextSession(),
    };
  }

  return null;
}

const INITIAL_MESSAGE = "";

export default function PromptApiChatSection({ isActive }: PromptApiChatSectionProps) {
  const [availability, setAvailability] = useState<string>("unknown");
  const [statusText, setStatusText] = useState<string>("Sin comprobar disponibilidad.");
  const [loadingAvailability, setLoadingAvailability] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, role: "assistant", content: INITIAL_MESSAGE },
  ]);
  const sessionRef = useRef<PromptSession | null>(null);
  const nextIdRef = useRef<number>(2);

  const provider = useMemo(() => getPromptProvider(), []);
  const canShowChat = availability === "available";

  useEffect(() => {
    return () => {
      const session = sessionRef.current;
      if (!session) return;
      if (typeof session.destroy === "function") {
        void session.destroy();
      } else if (typeof session.close === "function") {
        void session.close();
      }
    };
  }, []);

  const checkAvailability = async () => {
    if (!provider) {
      setAvailability("not-supported");
      setStatusText("Prompt API no existe en este navegador. Usa fallback en servidor.");
      return;
    }

    setLoadingAvailability(true);
    try {
      const state = await provider.availability();
      setAvailability(state);
      if (state === "available" || state === "readily") {
        setStatusText(
          `Disponible de inmediato (${state}) con ${provider.providerName}. Ya puedes enviar prompts.`,
        );
      } else if (state === "downloadable" || state === "downloading") {
        setStatusText(
          `Estado ${state}. Puede requerir descarga inicial del modelo local antes de responder.`,
        );
      } else {
        setStatusText(`Estado detectado: ${state}. Si no es 'readily', usa fallback en servidor.`);
      }
    } catch (error) {
      setAvailability("error");
      setStatusText(`No se pudo consultar disponibilidad: ${String(error)}. Usa fallback en servidor.`);
    } finally {
      setLoadingAvailability(false);
    }
  };

  const enviarPrompt = async () => {
    const texto = input.trim();
    if (!texto || isSending) return;

    setMessages((prev) => [...prev, { id: nextIdRef.current++, role: "user", content: texto }]);
    setInput("");

    if (!provider) {
      setMessages((prev) => [
        ...prev,
        {
          id: nextIdRef.current++,
          role: "assistant",
          content: "Prompt API no está soportada aquí. Fallback recomendado: tu endpoint de servidor.",
        },
      ]);
      return;
    }

    setIsSending(true);
    try {
      const state = await provider.availability();
      setAvailability(state);

      if (state !== "available" && state !== "downloadable" && state !== "downloading") {
        setMessages((prev) => [
          ...prev,
          {
            id: nextIdRef.current++,
            role: "assistant",
            content: `Prompt API devuelve '${state}'. No hay sesión local lista; usa fallback en servidor.`,
          },
        ]);
        return;
      }

      if (!sessionRef.current) {
        // Si el estado es downloadable/downloading, create() puede disparar o continuar la descarga.
        sessionRef.current = await provider.createSession();
      }

      const output = await sessionRef.current.prompt(texto);
      setMessages((prev) => [...prev, { id: nextIdRef.current++, role: "assistant", content: output }]);
      setStatusText(`Sesión local activa en este navegador (${provider.providerName}).`);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: nextIdRef.current++,
          role: "assistant",
          content: `Error usando Prompt API: ${String(error)}`,
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  if (!isActive) return null;

  return (
    <section className="prompt-chat-section" aria-label="Chat local Prompt API">
      <div className="prompt-chat-card">
        <h3 className="prompt-chat-title">Prompt API (Chrome/Edge)</h3>

        <div className="prompt-chat-controls">
          <button
            type="button"
            className="button prompt-chat-btn"
            onClick={checkAvailability}
            disabled={loadingAvailability}
          >
            {loadingAvailability ? "Comprobando..." : "Comprobar disponibilidad"}
          </button>
          <span className="prompt-chat-status" aria-live="polite">
            Estado: {availability}
          </span>
        </div>
        <p className="prompt-chat-help">{statusText}</p>

        {canShowChat ? (
          <>
            <div className="prompt-chat-window" aria-live="polite">
              {messages.map((msg) => (
                <div key={msg.id} className={`prompt-chat-bubble prompt-chat-bubble--${msg.role}`}>
                  <strong>{msg.role === "user" ? "Tú" : "Modelo local"}:</strong> {msg.content}
                </div>
              ))}
            </div>

            <div className="prompt-chat-input-row">
              <textarea
                className="prompt-chat-input"
                rows={3}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe un prompt, por ejemplo: Resume esta página en 3 viñetas"
              />
              <button
                type="button"
                className="button prompt-chat-btn"
                onClick={enviarPrompt}
                disabled={isSending || input.trim().length === 0}
              >
                {isSending ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </>
        ) : (
          <p className="prompt-chat-help">
            El chat se habilita cuando el estado del modelo pase a <b>available</b>.
          </p>
        )}
      </div>
    </section>
  );
}
