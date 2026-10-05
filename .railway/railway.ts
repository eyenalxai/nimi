import { defineRailway, github, project, service } from "railway/iac"

export default defineRailway(() => {
  const nimi = service("nimi", {
    source: github("eyenalxai/nimi", { branch: "main", checkSuites: false }),
    build: "bun run build",
    start: "bun run start",
    healthcheck: "/health",
    healthcheckTimeout: 120,
    replicas: { "europe-west4-drams3a": 1 },
    domains: ["nimi.takx.xyz"],
    env: {
      NODE_ENV: "production",
    },
  })

  return project("Nimi", {
    resources: [nimi],
  })
})
