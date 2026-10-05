import { useSyncExternalStore } from "react"

import type { ResolvedTheme, Theme } from "@/lib/theme"

import {
  getSystemServerSnapshot,
  getSystemSnapshot,
  getThemeServerSnapshot,
  getThemeSnapshot,
  setTheme,
  subscribe,
} from "@/lib/theme-store"

type UseThemeResult = {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

const useTheme = (): UseThemeResult => {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getThemeServerSnapshot)
  const systemDark = useSyncExternalStore(subscribe, getSystemSnapshot, getSystemServerSnapshot)
  const resolved = theme === "system" ? systemDark : theme === "dark"
  return { theme, resolvedTheme: resolved ? "dark" : "light", setTheme }
}

export { useTheme }
