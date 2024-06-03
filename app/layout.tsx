import "./globals.css"
import { LinkButton } from "@/components/link-button"
import { Providers } from "@/components/providers"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import type { Viewport } from "next"
import type { ReactNode } from "react"

export const metadata = {
	title: "Name Generator",
	description: "Generates fullnames and usernames"
}

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#030712" }
	]
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("font-sans", "antialiased", fontSans.variable)}>
				<main className={cn("w-full", "flex", "justify-center", "mt-4")}>
					<Providers attribute="class" defaultTheme="system" enableSystem>
						<div className={cn("flex", "flex-col", "items-center", "space-y-6")}>
							<div className={cn("w-80", "flex", "flex-row", "justify-start", "space-x-2")}>
								<LinkButton path={"usernames"} />
								<LinkButton path={"fullnames"} />
							</div>
							{children}
						</div>
					</Providers>
				</main>
			</body>
		</html>
	)
}
