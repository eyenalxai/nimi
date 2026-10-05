import type { ResolvedTheme, Theme } from "@/lib/theme"

import { THEME_STORAGE_KEY, isTheme } from "@/lib/theme"

const listeners = new Set<() => void>()

let mediaQuery: MediaQueryList | null = null

const getMediaQuery = () => {
  mediaQuery ??= window.matchMedia("(prefers-color-scheme: dark)")
  return mediaQuery
}

const readStoredTheme = (): Theme => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  return isTheme(stored) ? stored : "system"
}

const resolveTheme = (theme: Theme, systemDark: boolean): ResolvedTheme => {
  if (theme === "system") {
    return systemDark ? "dark" : "light"
  }
  return theme
}

const applyTheme = (theme: Theme) => {
  const resolved = resolveTheme(theme, getMediaQuery().matches)
  document.documentElement.classList.toggle("dark", resolved === "dark")
  document.documentElement.style.colorScheme = resolved
}

const notify = () => {
  for (const listener of listeners) {
    listener()
  }
}

const handleSystemChange = () => {
  if (readStoredTheme() === "system") {
    applyTheme("system")
  }
  notify()
}

const subscribe = (listener: () => void) => {
  listeners.add(listener)
  if (listeners.size === 1) {
    getMediaQuery().addEventListener("change", handleSystemChange)
  }
  return () => {
    listeners.delete(listener)
    if (listeners.size === 0) {
      getMediaQuery().removeEventListener("change", handleSystemChange)
    }
  }
}

// A theme flip touches nearly every element at once.
// Without suppression, every color transition fires together and smears.
const withTransitionsSuppressed = (run: () => void) => {
  const style = document.createElement("style")
  style.textContent = "*,*::before,*::after{transition:none !important}"
  document.head.append(style)
  run()
  void document.body.offsetHeight
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      style.remove()
    })
  })
}

const setTheme = (theme: Theme) => {
  localStorage.setItem(THEME_STORAGE_KEY, theme)
  withTransitionsSuppressed(() => {
    applyTheme(theme)
  })
  notify()
}

const getThemeSnapshot = (): Theme => readStoredTheme()

const getThemeServerSnapshot = (): Theme => "system"

const getSystemSnapshot = (): boolean => getMediaQuery().matches

const getSystemServerSnapshot = (): boolean => false

export {
  getSystemServerSnapshot,
  getSystemSnapshot,
  getThemeServerSnapshot,
  getThemeSnapshot,
  setTheme,
  subscribe,
}
