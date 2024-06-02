import "./globals.css"
import { Providers } from "@/components/providers"
import { Button } from "@/components/ui/button"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import type { Viewport } from "next"
import Link from "next/link"
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
			<body className={cn("font-sans antialiased", fontSans.variable, fontMono.variable)}>
				<main className={cn("w-full", "flex", "justify-center", "mt-12")}>
					<Providers attribute="class" defaultTheme="system" enableSystem>
						<div className={cn("flex", "flex-col", "items-center", "space-y-12")}>
							<div className={cn("w-80", "flex", "flex-col", "justify-start", "space-y-4")}>
								<Button asChild variant={"outline"} className={cn("lowercase", "text-lg", "w-36")}>
									<Link href="/usernames">Usernames</Link>
								</Button>
								<Button asChild variant={"outline"} className={cn("lowercase", "text-lg", "w-36")}>
									<Link href="/fullnames">Fullnames</Link>
								</Button>
							</div>
							{children}
						</div>
					</Providers>
				</main>
			</body>
		</html>
	)
}
