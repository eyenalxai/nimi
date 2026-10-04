import { Link } from "@tanstack/react-router"
import { cn } from "cn"

const MODES = [
  { to: "/usernames", label: "usernames" },
  { to: "/fullnames", label: "full names" },
] as const

export const ModeTabs = () => (
  <nav
    aria-label="generator mode"
    className={cn("inline-flex", "items-center", "gap-1", "rounded-lg", "bg-muted", "p-1")}
  >
    {MODES.map((mode) => (
      <Link
        key={mode.to}
        to={mode.to}
        className={cn(
          "rounded-md px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors",
          "hover:text-foreground",
          "data-[status=active]:bg-background data-[status=active]:text-foreground data-[status=active]:shadow-sm"
        )}
      >
        {mode.label}
      </Link>
    ))}
  </nav>
)
