import type { Transition, Variants } from "motion/react"

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.25, filter: "blur(4px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.25, filter: "blur(4px)" },
}

const iconTransition: Transition = {
  type: "spring",
  duration: 0.3,
  bounce: 0,
}

export { iconTransition, iconVariants }
