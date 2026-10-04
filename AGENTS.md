## Agent skills

### Issue tracker

Issues and specs live as GitHub issues in `eyenalxai/nimi`, managed with the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Five canonical triage roles map 1:1 to their label strings (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout: one `GLOSSARY.md` at the repo root plus ADRs in `docs/adr/`. See `docs/agents/domain.md`.

## Project conventions

- No backwards compatibility: refactor freely. Optimise for long-term maintenance and best practices.
- Use Bun for everything: package manager, runtime, scripts, migrations (`bun --bun`).
- Place files where they belong and respect the project structure (`src/lib`, `src/components`, `src/routes`, …).
- No re-exports and no barrel files.
- Do not suppress lint rules (oxlint/eslint) unless absolutely justified. Explain and surface every suppression.
- Do not run dev servers. Do not use the browser. Do not add tests.
- Drizzle: generate/apply migrations only through commands (`bun db:generate`; custom migrations via `drizzle-kit generate --custom --name=<migration-name>`). Never create migration files manually.
- No data loss unless explicitly approved. Every schema change is approved by the maintainer first.
- Never write raw SQL. Use the Drizzle ORM, even when intermediate results must be stored in memory.
- Never suppress errors unless explicitly allowed.
- Do not write comments unless they explain a hard "why this way?" question.
