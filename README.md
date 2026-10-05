# nimi

Generate fresh usernames and full names, ten at a time.

Live: [nimi.takx.xyz](https://nimi.takx.xyz)

## Stack

- [TanStack Start](https://tanstack.com/start) — file-based routes with SSR, built on Vite
- [Bun](https://bun.sh) — package manager and runtime (`bun --bun`)
- React 19, Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com) with Base UI primitives (`nova` preset)
- [Motion](https://motion.dev) (`motion/react`) — animation, honoring `prefers-reduced-motion`
- [evlog](https://www.evlog.dev) — one structured wide event per server request
- [Nitro](https://nitro.build) — production server bundle, deployed on [Railway](https://railway.com) as infrastructure as code

## Development

```bash
bun install
bun --bun run dev
```

## Scripts

| Script                          | Purpose                              |
| ------------------------------- | ------------------------------------ |
| `bun --bun run dev`             | Vite dev server on port 3000         |
| `bun --bun run build`           | Production build to `.output/`       |
| `bun --bun run start`           | Run the production server on `$PORT` |
| `bun --bun run preview`         | Preview the production build         |
| `bun --bun run format`          | Format with oxfmt                    |
| `bun --bun run lint`            | Lint with oxlint (type-aware)        |
| `bun --bun run tsc`             | Typecheck                            |
| `bun --bun run check`           | Format check + lint + typecheck      |
| `bun --bun run generate-routes` | Regenerate the file-route tree       |

## Routes

| Route        | What it does                               |
| ------------ | ------------------------------------------ |
| `/`          | Redirects to `/usernames`                  |
| `/usernames` | Ten generated usernames                    |
| `/fullnames` | Ten generated full names                   |
| `/health`    | Readiness JSON for the Railway healthcheck |

Names are generated on the server for the initial render and regenerated in the browser, so “another” never round-trips.

## Deployment

Railway configuration lives in [`.railway/railway.ts`](./.railway/railway.ts) (Railway's TypeScript IaC SDK):

```bash
railway config plan     # preview the diff
railway config apply    # apply it
```

The service builds with `bun run build` and starts with `bun run start`, with `/health` as the deployment healthcheck. Pushes to `main` deploy automatically.

## License

[The Unlicense](./LICENSE)
