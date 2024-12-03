import { LinkButton } from "@/components/link-button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const Tabs = () => (
	<div className={cn("flex", "flex-row", "gap-x-2")}>
		<LinkButton path="usernames" />
		<LinkButton path="fullnames" />
	</div>
)
