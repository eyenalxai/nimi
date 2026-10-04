import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"
import { copyToClipboard } from "@/lib/clipboard"
import { CheckIcon, CopyIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"

type CopyNameButtonProps = {
  name: string
}

export const CopyNameButton = ({ name }: CopyNameButtonProps) => {
  const [copied, setCopied] = useState(false)
  const resetTimer = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (resetTimer.current !== null) {
        window.clearTimeout(resetTimer.current)
      }
    },
    []
  )

  const handleCopy = async () => {
    const result = await copyToClipboard(name)

    if (!result.ok) {
      toast.add({
        title: "couldn't copy",
        description: result.error,
        type: "error",
      })
      return
    }

    setCopied(true)
    toast.add({ title: "copied", description: name, type: "success" })
    resetTimer.current = window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className="text-muted-foreground hover:text-foreground"
      aria-label={`copy ${name}`}
      onClick={handleCopy}
    >
      {copied ? <CheckIcon aria-hidden="true" /> : <CopyIcon aria-hidden="true" />}
    </Button>
  )
}
