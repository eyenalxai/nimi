import { CheckIcon, CopyIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

import { toast } from "@/components/ui/toast"
import { copyToClipboard } from "@/lib/clipboard"
import { iconTransition, iconVariants } from "@/lib/icon-motion"

type NameRowProps = {
  name: string
}

const COPIED_RESET_MS = 1500

const NameRow = ({ name }: NameRowProps) => {
  const [copied, setCopied] = useState(false)
  const resetTimer = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (resetTimer.current !== null) {
        window.clearTimeout(resetTimer.current)
      }
    },
    [],
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
    resetTimer.current = window.setTimeout(() => {
      setCopied(false)
    }, COPIED_RESET_MS)
  }

  return (
    <button
      type="button"
      aria-label={`copy ${name}`}
      onClick={() => {
        void handleCopy()
      }}
      className="group flex h-11 w-full cursor-pointer items-center justify-between gap-4 text-left transition-colors outline-none select-none hover:bg-muted/60 focus-visible:bg-muted focus-visible:ring-2 focus-visible:ring-ring/60 active:bg-muted"
    >
      <span className="min-w-0 truncate text-sm font-medium tracking-tight">{name}</span>
      <span
        aria-hidden="true"
        className="grid size-4 shrink-0 place-items-center text-muted-foreground transition-colors group-hover:text-foreground"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "check" : "copy"}
            className="grid place-items-center"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={iconTransition}
          >
            {copied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? "copied" : ""}
      </span>
    </button>
  )
}

export { NameRow }
