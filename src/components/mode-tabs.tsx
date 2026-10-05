import type { Transition } from "motion/react"

import { Link, useRouterState } from "@tanstack/react-router"
import { cn } from "cn"
import { motion } from "motion/react"

const MODES = [
  { to: "/usernames", label: "usernames" },
  { to: "/fullnames", label: "full names" },
] as const

const pillTransition: Transition = {
  type: "spring",
  duration: 0.35,
  bounce: 0,
}

const ModeTabs = () => {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  return (
    <nav aria-label="generator mode" className="flex items-center rounded-lg bg-muted p-0.5">
      {MODES.map((mode) => {
        const isActive = pathname === mode.to
        return (
          <Link
            key={mode.to}
            to={mode.to}
            className={cn(
              "relative flex h-7 items-center rounded-md px-2.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground",
              isActive && "text-foreground",
            )}
          >
            {isActive ? (
              <motion.span
                layoutId="mode-pill"
                className="absolute inset-0 rounded-md bg-background shadow-sm"
                transition={pillTransition}
              />
            ) : null}
            <span className="relative z-10">{mode.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export { ModeTabs }
