export type Theme = "light" | "dark" | "system"

export type ResolvedTheme = "light" | "dark"

export const THEME_STORAGE_KEY = "nimi-theme"

export const isTheme = (value: unknown): value is Theme =>
  value === "light" || value === "dark" || value === "system"

/**
 * Runs before first paint. Reads the stored preference (defaulting to the
 * system preference) and puts the `dark` class on <html> so the first frame
 * is already the right theme.
 */
export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light"}catch(e){}})()`
