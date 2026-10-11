# AGENTS.md — StromRol workspace

StromRol is a Spanish-language character generator web app for the indie RPG **Strom** (Marbella, 1996). Built
with React 19 + TypeScript + Vite + MUI 7

- Emotion, deployed to GitHub Pages.

> 📖 **For source-code–specific rules** (TypeScript config, React patterns, domain model), see
> [`StromRol/AGENTS.md`](StromRol/AGENTS.md).
>
> 📖 **For general project info** (features, deployment, public URL), see [`README.md`](README.md).

---

## Workspace layout (two-level, no workspaces)

This repo is **not** a monorepo — it is a single React/Vite project contained inside a nested folder. The
outer folder only holds husky setup, README, and the `docs/` build artifact.

```
REPOS/StromRol/                 ← workspace root (only husky + README + docs)
├── .husky/pre-commit           ← auto-runs build, stages docs/
├── package.json                ← only husky devDependency
├── docs/                        ← GitHub Pages build output (NEVER hand-edit)
└── StromRol/                   ← ALL source, commands, JSON, scripts
    ├── package.json            ← dev / build / lint scripts
    ├── vite.config.ts          ← outDir: "../docs"
    ├── src/                    ← React + TS source
    ├── public/                 ← JSON data + static assets
    └── scripts/                ← Python helpers (spell translation)
```

> ⚠️ **All `npm` commands must be run from inside `StromRol/`**, not the workspace root.

---

## Commands

Always `cd StromRol` first.

| Task               | Command                          |
| ------------------ | -------------------------------- |
| Install deps       | `cd StromRol && npm install`     |
| Dev server         | `cd StromRol && npm run dev`     |
| Production build   | `cd StromRol && npm run build`   |
| Lint               | `cd StromRol && npm run lint`    |
| Preview built site | `cd StromRol && npm run preview` |

The build outputs to `../docs/` (relative to inner folder) and the `postbuild` script creates
`../docs/.nojekyll`.

---

## Deploy pipeline (auto)

GitHub Pages is served from the root `docs/` folder. The pre-commit hook automatically rebuilds and stages the
build output:

```bash
# .husky/pre-commit
echo "pre-commit ejecutado"
cd StromRol && npm run build
cd ..
git add docs
```

Consequences:

- ⚠️ **Never hand-edit files inside `docs/`** — they are regenerated on every commit and will be overwritten.
- ⚠️ **A failing `tsc -b` aborts the commit.** Fix type errors before committing; don't bypass with
  `--no-verify`.
- ✅ It is normal to see `docs/` change in commits after editing source.

Public URL: <https://www.stromrol.es/> (see [`docs/CNAME`](docs/CNAME)). The `README.md` mentions a
`yeicogm.github.io` URL — that is **stale**; the CNAME is the source of truth.

---

## Tech stack

| Layer      | Choice                                               |
| ---------- | ---------------------------------------------------- |
| Framework  | React 19.1 + react-dom                               |
| UI library | MUI 7.3 + Emotion 11                                 |
| Build      | Vite 7 + `@vitejs/plugin-react-swc` (SWC, not Babel) |
| Language   | TypeScript ~5.8 (strict)                             |
| Lint       | ESLint 9 flat config (`eslint.config.js`)            |
| Hooks      | Husky 9 (root-level only)                            |

---

## Repository conventions

- UI labels and most code comments are in **Spanish** — match the existing tone when adding new strings.
- Domain terms (Raza, Clase, Origen, Característica…) keep accents and proper capitalization.
- `index.html` ships placeholder metadata pointing at `tu-dominio-aqui.com` — replace with
  `https://www.stromrol.es/` when touching SEO/OG tags. The same placeholder is regenerated into
  `docs/index.html` on every build.
