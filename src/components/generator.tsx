import { Button } from "@/components/ui/button"
import { CopyNameButton } from "@/components/copy-name-button"
import { RefreshCwIcon } from "lucide-react"
import { useState } from "react"

type GeneratorProps = {
  title: string
  initialNames: string[]
  generate: () => string[]
}

export const Generator = ({
  title,
  initialNames,
  generate,
}: GeneratorProps) => {
  const [names, setNames] = useState(initialNames)

  return (
    <div className="flex flex-col gap-8">
      <h1 className="sr-only">{title}</h1>
      <ul className="flex flex-col">
        {names.map((name, index) => (
          <li
            key={`${index}-${name}`}
            className="group flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-muted/60"
          >
            <span className="min-w-0 truncate text-lg tracking-tight">
              {name}
            </span>
            <CopyNameButton name={name} />
          </li>
        ))}
      </ul>
      <Button
        variant="outline"
        size="lg"
        className="w-full"
        onClick={() => setNames(generate())}
      >
        <RefreshCwIcon data-icon="inline-start" />
        another
      </Button>
    </div>
  )
}
