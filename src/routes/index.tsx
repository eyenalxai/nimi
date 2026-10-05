import { createFileRoute, redirect } from "@tanstack/react-router"

const Route = createFileRoute("/")({
  beforeLoad: () => redirect({ to: "/usernames" }),
})

export { Route }
