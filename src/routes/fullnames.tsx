import { Generator } from "@/components/generator"
import { generateFullNames } from "@/lib/generate"
import { createFileRoute } from "@tanstack/react-router"

const COUNT = 10
const MIN = 1
const MAX = 4

export const Route = createFileRoute("/fullnames")({
  head: () => ({
    meta: [
      { title: "full names — nimi" },
      {
        name: "description",
        content: "Ten freshly generated full names. Another ten whenever you want.",
      },
    ],
  }),
  loader: () => ({ names: generateFullNames({ count: COUNT, min: MIN, max: MAX }) }),
  component: FullnamesRoute,
})

function FullnamesRoute() {
  const { names } = Route.useLoaderData()

  return (
    <Generator
      title="full names"
      initialNames={names}
      generate={() => generateFullNames({ count: COUNT, min: MIN, max: MAX })}
    />
  )
}
