"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type LinkButtonProps = {
	path: "usernames" | "fullnames"
}

export const LinkButton = ({ path }: LinkButtonProps) => {
	const pathname = usePathname()

	return (
		<Button asChild variant={pathname === `/${path}` ? "default" : "ghost"}>
			<Link href={`/${path}`} prefetch>
				{path}
			</Link>
		</Button>
	)
}
