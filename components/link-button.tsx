import { Button } from "@/components/ui/button"
import { capitalize, cn } from "@/lib/utils"
import Link from "next/link"

type LinkButtonProps = {
	path: "usernames" | "fullnames"
	active?: boolean
}

export const LinkButton = ({ path, active }: LinkButtonProps) => {
	return (
		<Button asChild variant={active ? "default" : "outline"} className={cn("lowercase", "text-lg", "w-36")}>
			<Link href={`/${path}`}>{capitalize(path)}</Link>
		</Button>
	)
}
