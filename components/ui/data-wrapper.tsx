"use client"

import { Copyable } from "@/components/copyable"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useQueryClient } from "@tanstack/react-query"

type DataWrapperProps = {
	data: string[]
	type: "fullnames" | "usernames"
	isFetching?: boolean
}

export const DataWrapper = ({ data, type, isFetching }: DataWrapperProps) => {
	const queryClient = useQueryClient()

	return (
		<div className={cn("flex", "flex-col", "space-y-8")}>
			<div className={cn("flex", "flex-col", "space-y-3", "w-80")}>
				{data.map((value) => (
					<Copyable
						key={isFetching ? Math.random().toString(16).slice(2, 10) : value}
						value={value}
						isFetching={isFetching}
					/>
				))}
			</div>
			<Button
				disabled={isFetching}
				variant={"outline"}
				className={cn("w-16")}
				onClick={() => queryClient.refetchQueries({ queryKey: [type] })}
			>
				more
			</Button>
		</div>
	)
}
