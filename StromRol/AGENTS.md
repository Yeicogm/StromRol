# AGENTS.md — StromRol source (inner project)

> 📖 **Workspace-level rules** (build pipeline, deploy, two-level layout):
> see [`../AGENTS.md`](../AGENTS.md).
>
> 📖 **Feature description and screenshots**:
> see [`../README.md`](../README.md).

This file governs the React/TypeScript app under `src/` plus the Python
helpers under `scripts/` and the JSON data under `public/`.

---

## Source map

| Path | Notes |
|-------|-------|
| `src/App.tsx` | Single-file orchestrator: state, JSON fetches, event handlers, derived calcs. Most logic lives here for now. |
| `src/main.tsx` | React 19 root with `<StrictMode>` |
| `src/App.css`, `src/index.css` | All styles (~1300 lines). Mobile breakpoint is hard-coded at **450px**. |
| `src/components/sections/` | The 4 top-level tabs: `GeneradorSection`, `ListaExitosSection`, `StromSection`, `CompendioSection`. Each is gated by an `isActive` prop. |
| `src/components/` | Other UI cards (`RazaInfo`, `ClaseInfo`, `NacionalidadInfo`, `OrigenInfo`, `ResultadoHabilidades`, `BonificacionesTotales`). |
| `src/logic/logica.ts` | Pure game-rule logic: dice parsing, variations, limitations, totals. Keep this file **pure** (no DOM, no React). |
| `src/interfaces/` | One TS file per domain object. JSDoc on every public type. |
| `src/Info/spells.json` | Spell data, translation in progress. See `src/Info/TRANSLATION_PROGRESS.md`. |
| `public/*.json` | Runtime-loaded data: `Razas`, `Clases`, `Nacionalidad`, `Origen`, `Exitos`. Also copied verbatim to `docs/` by Vite. |

---

## TypeScript rules (strict, non-negotiable)

[`tsconfig.app.json`](tsconfig.app.json) enables several options that change
how you write code. Violating them breaks `npm run build` (which runs
`tsc -b` first).

### `verbatimModuleSyntax: true`

**Every type-only import must use `import type`.**

```typescript
// ✅ correct
import type { Raza } from "../interfaces/RazasInterface";
import { calcularCaracteristicasFinales } from "../logic/logica";

// ❌ wrong — build fails
import { Raza } from "../interfaces/RazasInterface";
```

Re-export of types also requires `export type { ... }`.

### `erasableSyntaxOnly: true`

**No `enum`, no `namespace`, no `const enum`.** Use union types or
`as const` objects instead. See [`src/interfaces/Habilidades.ts`](src/interfaces/Habilidades.ts)
for the established pattern.

### `noUnusedLocals` and `noUnusedParameters: true`

Prefix intentionally-unused params with `_` (`function foo(_x: number)`) or
the build fails.

### Other notable flags

- `strict: true` (incl. `strictNullChecks`)
- `noFallthroughCasesInSwitch`
- `noUncheckedSideEffectImports`
- `allowImportingTsExtensions` — files may import with `.ts`/`.tsx` extensions
  in some paths; prefer the extensionless form unless adding new code
- `jsx: "react-jsx"` — don't import React for JSX
- `moduleResolution: "bundler"`, `module: "ESNext"`, `target: "ES2022"`

---

## React / MUI conventions

- **React 19** — `useEffect`, `useState`, `useMemo` only; no class components.
- **MUI 7 + Emotion 11** — use MUI components (`<TextField>`, `<Select>`,
  `<Button>`…) over raw HTML where possible. Icons via `@mui/icons-material`.
- File-scope imports use the `@/` alias only when already present; this
  project currently uses **relative paths** everywhere — keep that.
- Co-locate component styles in `App.css` until a real CSS-in-JS or
  CSS-modules pattern is introduced. Don't add new `<style>` tags or inline
  `style={{}}` for things that recur.

---

## Domain model — quick cheatsheet

The app is a Strom RPG character generator. Domain terms are in Spanish.

### Characteristics (always 7)

[`src/interfaces/Caracteristicas.ts`](src/interfaces/Caracteristicas.ts) —
canonical keys: `Fuerza`, `Constitución`, `Tamaño`, `Inteligencia`, `Poder`,
`Destreza`, `Carisma`. All values in JSON are **dice strings** like `"3D6"`,
`"2D4+1"`, `"-1D"`. Accents must be preserved; comparison uses the
`MAPEO_CARACTERISTICAS` lookup for ~25 spelling variants (FUERZA, FUE,
fuerza…).

### Dice notation

- Uppercase `D`: `3D6`, `2D4+1`. The parsers in
  [`src/logic/logica.ts#parseDados`](src/logic/logica.ts) and the inline
  `tirarDado` in `App.tsx` both accept lowercase via `/i`.
- A bare `+1D` reuses the base die's faces (`3D6` + `+1D` → `4D6`).
- `parseDados` is single-expression; `tirarDado` in `App.tsx` is the chained
  version (`3D6+1D10+2`) and supports the `dadosMin2` checkbox (forces
  die minimum of 2).

### Variations

[`aplicarVariaciones`](src/logic/logica.ts#L24) covers **two orderings**:

```text
"Inteligencia +1"      "Destreza +1D"      "PODER +2D6"   ← attribute first
"-2 INTELIGENCIA"                                      ← change first
```

When adding new patterns, add a test case in both orderings.

### Limitations per class

- Stored on `clase.variacion_caracMINMAX` as strings like `"MIN PODER 5D"`,
  `"MAX FUERZA 19"`.
- `MIN` only acts on dice expressions (`3D6` → `5D6`); pure numeric values
  pass through.
- `MAX` is enforced in `manejarCambioCaracteristica` in `App.tsx` — it
  silently clamps the input box. Don't change this contract without
  checking the existing alert UX.

### Derived stats (computed in `App.tsx`)

When the user clicks "Calcular habilidades":

| Stat | Formula |
|------|---------|
| `bonusCC` | Tiers on `Fuerza`: 18-23→+1, 24-30→+1D4, 31-38→+1D6, 39-45→+1D10, ≥46→+2D6, else "Sin bonus" |
| `bonusAA` | Only for `ARQUERO`, `CASACA AZUL`, `ILMIONARIO`, `GUARDABOSQUES` — based on `fuerza+destreza`. Otherwise `"NO TIENE"`. |
| `conocimiento` | `int` tiered: 1-10→int, 11-18→int+20, ≥19→int+30 |
| `percepcion` | `int + destreza + 10` |
| `comunicacion` | `⌊conocimiento/2⌋ + int + pod + car - 5` |
| `agilidad` | `destreza*2 + int + pod - tam - 5` |
| `manipulacion` | `int*2 + destreza + car - 15` |
| `discrecion` | `int + ⌊fuerza/2⌋ + pod + destreza - tam - 5` |
| `saludMental` | `pod + car + int + 40 - con` |
| `puntosVida` | `max(1, con + tam - 12)` |

⚠️ The hard-coded AA-bonus class list appears in **two places** in
`App.tsx` (the random-roll handler and the calculate handler). Keep them
in sync when editing.

### Nationality → Origin filtering

`nacionalidad.origen_social` is either:

- `string[]` of `"01-50: Noble"` → split on `:`, uppercase the part after,
  match against `Origen.json[].nombre`.
- `string` (a plain text or special-table marker) → **show all** origins.

When adding new nationality entries, follow that exact format.

### d100 roll tables (nationality + origin)

- Ranges in JSON may use `"00"` to mean `100` in either `min` or `max`.
- The app swaps ranges where `min > max` before rolling.

### Special races

`SELOROK`, `DEMONIO`, `SELEROK`, `DEMONIOS` are classless — the class
selector is disabled and cleared when one is chosen.

---

## JSON data shapes

Verified shapes (don't change field names without searching the codebase):

```text
Razas.json        → { razas: [{ nombre, descripcion, caracteristicas, notas?, armadura?, ataque?, rango, bonificaciones }] }
Clases.json       → { clases: [{ nombre, descripcion, rango, variacion_caracteristicas, variacion_caracMINMAX, variacion_carac_info, variacion_habilidades, equipo_especial, Bonus_combate, especial, cualidades }] }
Nacionalidad.json → { nacionalidades: [{ nombre, minimo, maximo, variacion_caracteristicas, origen_social, info_nacionalidad }] }
Origen.json       → { origenes: [{ nombre, minimo, maximo, variacion_habilidades, variacion_caracteristicas, variacion_bonus_combate, info_Origen }] }
Exitos.json       → { personajes: [{ jugador, nombrePersonaje, raza, clases, nivelGuerrero, nivelSemi, nivelPicaro, nivelMago }] }
```

`ListaExitosSection` ranks entries by total points using
`PUNTOS_POR_NIVEL = { guerrero:0.85, semi:0.95, picaro:0.9, mago:1 }`,
formats decimals with `Intl.NumberFormat("es-ES", { minimumFractionDigits: 2,
maximumFractionDigits: 2 })`.

---

## Python scripts under `scripts/`

| File | Purpose |
|------|---------|
| `fix_spell12.py` | One-shot replace of `description` for spell `id == 12` in `src/Info/spells.json` |
| `sanitize_json.py` | Strips non-printable ASCII control chars from `spells.json` (keeps TAB=9, LF=10, CR=13) |
| `translate_spells_batch.py` | Dictionary-driven translator. `MAPPING: { id: { name, description } }`. Creates a `.bak` before writing. |

`src/Info/TRANSLATION_PROGRESS.md` tracks batch progress — read it before
resuming translation work to know the next pending `id` (currently `501+`).

Run with `python .\scripts\<file>.py` from the inner folder.

---

## Mobile / responsive

The breakpoint is **exactly `450px`** — enforced in two places that must
agree:

- JS: the `resize` listener in `App.tsx` (`useEffect`) that auto-closes the
  hamburger menu past 450px.
- CSS: `.ficha-tabs-mobile` and `.ficha-tabs-desktop` selectors in
  `App.css`/`index.css`.

If you change one, change the other.

---

## Logging / debugging gotchas

- `aplicarLimitaciones` and `construirDesgloseDados` in `src/logic/logica.ts`
  leave `console.log(...)` calls that ship to production. Don't add more
  without a clear reason; don't remove existing ones without checking.
- Type errors in `src/` will abort the pre-commit hook. Always run
  `npm run build` (or just `tsc -b`) locally before committing.