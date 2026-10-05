import type { ReactNode } from "react"

import { HeadContent, Link, Scripts, createRootRoute } from "@tanstack/react-router"

import { ModeTabs } from "@/components/mode-tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toast"
import { themeScript } from "@/lib/theme"
import appCss from "@/styles.css?url"

const NotFound = () => (
  <div className="flex flex-col items-start gap-4">
    <div className="flex flex-col gap-1">
      <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">404</p>
      <h1 className="text-2xl font-semibold tracking-tight">nothing here</h1>
      <p className="text-sm text-muted-foreground">
        That page doesn&apos;t exist. The names are elsewhere.
      </p>
    </div>
    <Button variant="outline" render={<Link to="/usernames" />}>
      back to usernames
    </Button>
  </div>
)

const RootDocument = ({ children }: { children: ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <head>
      <HeadContent />
    </head>
    <body className="antialiased">
      <Toaster>
        <div className="mx-auto flex min-h-svh w-full max-w-md flex-col px-5 py-8 sm:py-12">
          <header className="flex items-center justify-between">
            <Link to="/usernames" className="text-sm font-semibold tracking-tight">
              nimi
            </Link>
            <ThemeToggle />
          </header>
          <div className="mt-6">
            <ModeTabs />
          </div>
          <main className="flex flex-1 flex-col justify-center py-10">{children}</main>
          <footer className="text-center text-xs text-muted-foreground">
            generated on the fly ·{" "}
            <a
              href="https://github.com/eyenalxai/nimi"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              source
            </a>
          </footer>
        </div>
      </Toaster>
      <Scripts />
    </body>
  </html>
)

const Route = createRootRoute({
  head: () => {
    return {
      meta: [
        { charSet: "utf8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "nimi" },
        {
          name: "description",
          content: "Generate fresh usernames and full names, ten at a time.",
        },
      ],
      links: [{ rel: "stylesheet", href: appCss }],
      scripts: [{ children: themeScript }],
    }
  },
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
})

export { Route }
