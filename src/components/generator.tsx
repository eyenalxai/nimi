import { RefreshCwIcon } from "lucide-react"
import { useState } from "react"

import { CopyNameButton } from "@/components/copy-name-button"
import { Button } from "@/components/ui/button"

type GeneratedName = {
  id: string
  name: string
}

type GeneratorProps = {
  title: string
  initialNames: string[]
  generate: () => string[]
}

const withIds = (names: string[]): GeneratedName[] =>
  names.map((name) => {
    return { id: crypto.randomUUID(), name }
  })

const Generator = ({ title, initialNames, generate }: GeneratorProps) => {
  const [names, setNames] = useState(() => withIds(initialNames))

  const regenerate = () => {
    setNames(withIds(generate()))
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="sr-only">{title}</h1>
      <ul className="flex flex-col">
        {names.map((item) => (
          <li
            key={item.id}
            className="group flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-muted/60"
          >
            <span className="min-w-0 truncate text-lg tracking-tight">{item.name}</span>
            <CopyNameButton name={item.name} />
          </li>
        ))}
      </ul>
      <Button variant="outline" size="lg" className="w-full" onClick={regenerate}>
        <RefreshCwIcon data-icon="inline-start" />
        another
      </Button>
    </div>
  )
}

export { Generator }
