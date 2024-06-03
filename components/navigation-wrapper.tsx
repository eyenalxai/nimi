import { LinkButton } from "@/components/link-button"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type NavigationWrapperProps = {
	activePath: "usernames" | "fullnames"
	children: ReactNode
}

export const NavigationWrapper = ({ activePath, children }: NavigationWrapperProps) => {
	return (
		<div className={cn("flex", "flex-col", "items-center", "space-y-6")}>
			<div className={cn("w-80", "flex", "flex-row", "justify-start", "space-x-2")}>
				<LinkButton path={"usernames"} active={activePath === "usernames"} />
				<LinkButton path={"fullnames"} active={activePath === "fullnames"} />
			</div>
			{children}
		</div>
	)
}
