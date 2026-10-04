import { ModeTabs } from "@/components/mode-tabs"
import { Toaster } from "@/components/ui/toast"
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router"
import type { ReactNode } from "react"

import appCss from "../styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "nimi" },
      {
        name: "description",
        content: "Generate fresh usernames and full names, ten at a time.",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: () => (
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-2xl font-semibold tracking-tight">not found</h1>
      <p className="text-sm text-muted-foreground">
        That page doesn&apos;t exist.
      </p>
      <Link to="/usernames" className="text-sm underline underline-offset-4">
        back to usernames
      </Link>
    </div>
  ),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <Toaster>
          <div className="mx-auto flex min-h-svh w-full max-w-md flex-col px-5 py-8 sm:py-12">
            <header className="flex items-center justify-between">
              <Link
                to="/usernames"
                className="text-sm font-semibold tracking-tight"
              >
                nimi
              </Link>
              <ModeTabs />
            </header>
            <main className="flex flex-1 flex-col justify-center py-10">
              {children}
            </main>
          </div>
        </Toaster>
        <Scripts />
      </body>
    </html>
  )
}
