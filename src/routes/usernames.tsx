import { Generator } from "@/components/generator"
import { generateUsernames } from "@/lib/generate"
import { createFileRoute } from "@tanstack/react-router"

const COUNT = 10
const MIN = 3

export const Route = createFileRoute("/usernames")({
  head: () => ({
    meta: [
      { title: "usernames — nimi" },
      {
        name: "description",
        content: "Ten freshly generated usernames. Another ten whenever you want.",
      },
    ],
  }),
  loader: () => ({ names: generateUsernames({ count: COUNT, min: MIN }) }),
  component: UsernamesRoute,
})

function UsernamesRoute() {
  const { names } = Route.useLoaderData()

  return (
    <Generator
      title="usernames"
      initialNames={names}
      generate={() => generateUsernames({ count: COUNT, min: MIN })}
    />
  )
}
