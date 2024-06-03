"use client"

import { Copyable } from "@/components/copyable"
import { Button } from "@/components/ui/button"
import { revalidate } from "@/lib/revalidate"
import { useServerAction } from "@/lib/server-action-hook"
import { cn } from "@/lib/utils"

type DataWrapperProps = {
	values: string[]
	type: "fullnames" | "usernames"
}

export const DataDisplay = ({ values, type }: DataWrapperProps) => {
	const [runAction, isRunning] = useServerAction(() => revalidate(type))

	return (
		<div className={cn("flex", "flex-col", "space-y-6")}>
			<div className={cn("flex", "flex-col", "space-y-3", "w-80")}>
				{values.map((value) => (
					<Copyable key={value} value={value} disabled={isRunning} />
				))}
			</div>
			<Button
				disabled={isRunning}
				variant={"outline"}
				className={cn("w-16", "transition", "duration-100")}
				onClick={runAction}
			>
				more
			</Button>
		</div>
	)
}
