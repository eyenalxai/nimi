"use client"

import { Copyable } from "@/components/copyable"
import { Button } from "@/components/ui/button"
import { revalidate } from "@/lib/revalidate"
import { cn } from "@/lib/utils"

type DataWrapperProps = {
	values: string[]
	type: "fullnames" | "usernames"
}

export const DataDisplay = ({ values, type }: DataWrapperProps) => {
	return (
		<div className={cn("flex", "flex-col", "space-y-6")}>
			<div className={cn("flex", "flex-col", "space-y-3", "w-80")}>
				{values.map((value) => (
					<Copyable key={value} value={value} />
				))}
			</div>
			<Button variant={"outline"} className={cn("w-16")} onClick={() => revalidate(type)}>
				more
			</Button>
		</div>
	)
}
