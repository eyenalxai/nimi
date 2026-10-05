import { createFileRoute, getRouteApi } from "@tanstack/react-router"

import { Generator } from "@/components/generator"
import { generateUsernames } from "@/lib/generate"

const COUNT = 10
const MIN = 3

const routeApi = getRouteApi("/usernames")

const UsernamesRoute = () => {
  const { names } = routeApi.useLoaderData()

  return (
    <Generator
      title="usernames"
      initialNames={names}
      generate={() => generateUsernames({ count: COUNT, min: MIN })}
    />
  )
}

const Route = createFileRoute("/usernames")({
  head: () => {
    return {
      meta: [
        { title: "usernames — nimi" },
        {
          name: "description",
          content: "Ten freshly generated usernames. Another ten whenever you want.",
        },
      ],
    }
  },
  loader: () => {
    return { names: generateUsernames({ count: COUNT, min: MIN }) }
  },
  component: UsernamesRoute,
})

export { Route }
