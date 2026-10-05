import type { Transition, Variants } from "motion/react"

import { RefreshCwIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

import { NameRow } from "@/components/name-row"
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

const STAGGER_SECONDS = 0.04
const MAX_STAGGERED_ROWS = 9

const exitTransition: Transition = {
  duration: 0.12,
  ease: [0.19, 1, 0.22, 1],
}

const spinTransition: Transition = {
  type: "spring",
  duration: 0.45,
  bounce: 0,
}

const rowVariants: Variants = {
  hidden: { opacity: 0, transform: "translateY(8px)" },
  visible: (index: number) => {
    return {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        duration: 0.35,
        bounce: 0,
        delay: Math.min(index, MAX_STAGGERED_ROWS) * STAGGER_SECONDS,
      },
    }
  },
  exit: { opacity: 0, transform: "translateY(-6px)", transition: exitTransition },
}

const spinVariants: Variants = {
  spin: (rotation: number) => {
    return { rotate: rotation }
  },
}

const tapFeedback = { scale: 0.97 }

const withIds = (names: string[]): GeneratedName[] =>
  names.map((name) => {
    return { id: crypto.randomUUID(), name }
  })

const Generator = ({ title, initialNames, generate }: GeneratorProps) => {
  const [names, setNames] = useState(() => withIds(initialNames))
  const [rotation, setRotation] = useState(0)

  const regenerate = () => {
    setNames(withIds(generate()))
    setRotation((current) => current + 180)
  }

  return (
    <div className="flex flex-col">
      <h1 className="sr-only">{title}</h1>
      <ul className="mt-3 flex flex-col divide-y divide-border/60">
        <AnimatePresence mode="popLayout">
          {names.map((item, index) => (
            <motion.li
              key={item.id}
              custom={index}
              variants={rowVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <NameRow name={item.name} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <motion.div className="mt-3 w-full" whileTap={tapFeedback}>
        <Button variant="outline" size="lg" className="w-full" onClick={regenerate}>
          <motion.span
            className="grid place-items-center"
            custom={rotation}
            variants={spinVariants}
            initial={false}
            animate="spin"
            transition={spinTransition}
          >
            <RefreshCwIcon data-icon="inline-start" />
          </motion.span>
          another
        </Button>
      </motion.div>
    </div>
  )
}

export { Generator }
