export type CopyResult = { ok: true } | { ok: false; error: string }

export const copyToClipboard = async (text: string): Promise<CopyResult> => {
  if (
    !("navigator" in globalThis) ||
    !("clipboard" in navigator) ||
    !("writeText" in navigator.clipboard)
  ) {
    return { ok: false, error: "Clipboard API not available" }
  }

  try {
    await navigator.clipboard.writeText(text)
    return { ok: true }
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error && error.message !== ""
          ? error.message
          : "Failed to copy to clipboard",
    }
  }
}
