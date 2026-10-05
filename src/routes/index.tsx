import { createFileRoute, redirect } from "@tanstack/react-router"

const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/usernames" })
  },
})

export { Route }
