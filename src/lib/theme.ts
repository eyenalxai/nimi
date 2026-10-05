type Theme = "light" | "dark" | "system"

type ResolvedTheme = "light" | "dark"

const THEME_STORAGE_KEY = "nimi-theme"

const isTheme = (value: unknown): value is Theme =>
  value === "light" || value === "dark" || value === "system"

const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light"}catch(e){}})()`

export { THEME_STORAGE_KEY, isTheme, themeScript, type ResolvedTheme, type Theme }
