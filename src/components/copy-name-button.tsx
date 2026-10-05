import { CheckIcon, CopyIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"
import { copyToClipboard } from "@/lib/clipboard"
import { iconTransition, iconVariants } from "@/lib/icon-motion"

type CopyNameButtonProps = {
  name: string
}

const CopyNameButton = ({ name }: CopyNameButtonProps) => {
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
    toast.add({ title: "copied", description: name, type: "success" })
    resetTimer.current = window.setTimeout(() => {
      setCopied(false)
    }, 1500)
  }

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className="text-muted-foreground hover:text-foreground"
      aria-label={`copy ${name}`}
      onClick={() => {
        void handleCopy()
      }}
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
          {copied ? <CheckIcon aria-hidden="true" /> : <CopyIcon aria-hidden="true" />}
        </motion.span>
      </AnimatePresence>
    </Button>
  )
}

export { CopyNameButton }
