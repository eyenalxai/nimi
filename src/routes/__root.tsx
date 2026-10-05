import type { ReactNode } from "react"

import { HeadContent, Link, Scripts, createRootRoute } from "@tanstack/react-router"
import { createMiddleware } from "@tanstack/react-start"
import { evlogErrorHandler } from "evlog/nitro/v3"
import { MotionConfig } from "motion/react"

import { ModeTabs } from "@/components/mode-tabs"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toast"
import appCss from "@/styles.css?url"

const NotFound = () => (
  <div className="flex flex-col items-start gap-5">
    <div className="flex flex-col gap-1.5">
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
  <html lang="en">
    <head>
      <HeadContent />
      <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
    </head>
    <body className="antialiased">
      <MotionConfig reducedMotion="user">
        <Toaster>
          <div className="mx-auto flex min-h-svh w-full max-w-md flex-col px-6">
            <header className="flex h-16 items-center justify-between">
              <Link to="/usernames" className="text-sm font-semibold tracking-tight">
                nimi
              </Link>
              <ModeTabs />
            </header>
            <main className="flex flex-1 flex-col pt-8 sm:pt-12">{children}</main>
            <footer className="flex items-center justify-between py-6 text-xs text-muted-foreground">
              <p>generated on the fly</p>
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
      </MotionConfig>
      <Scripts />
    </body>
  </html>
)

const Route = createRootRoute({
  server: {
    middleware: [createMiddleware().server(evlogErrorHandler)],
  },
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
    }
  },
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
})

export { Route }
