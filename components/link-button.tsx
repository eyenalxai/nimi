"use client"

import { Button } from "@/components/ui/button"
import { capitalize, cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type LinkButtonProps = {
	path: "usernames" | "fullnames"
}

export const LinkButton = ({ path }: LinkButtonProps) => {
	const pathname = usePathname()

	return (
		<Button
			asChild
			variant={pathname === `/${path}` ? "default" : "outline"}
			className={cn("lowercase", "text-lg", "w-36")}
		>
			<Link href={`/${path}`}>{capitalize(path)}</Link>
		</Button>
	)
}
