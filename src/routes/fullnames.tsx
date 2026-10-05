import { createFileRoute, getRouteApi } from "@tanstack/react-router"

import { Generator } from "@/components/generator"
import { generateFullNames } from "@/lib/generate"

const COUNT = 10
const MIN = 1
const MAX = 4

const routeApi = getRouteApi("/fullnames")

const FullnamesRoute = () => {
  const { names } = routeApi.useLoaderData()

  return (
    <Generator
      title="full names"
      initialNames={names}
      generate={() => generateFullNames({ count: COUNT, min: MIN, max: MAX })}
    />
  )
}

const Route = createFileRoute("/fullnames")({
  head: () => {
    return {
      meta: [
        { title: "full names — nimi" },
        {
          name: "description",
          content: "Ten freshly generated full names. Another ten whenever you want.",
        },
      ],
    }
  },
  loader: () => {
    return { names: generateFullNames({ count: COUNT, min: MIN, max: MAX }) }
  },
  component: FullnamesRoute,
})

export { Route }
