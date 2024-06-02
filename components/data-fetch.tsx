"use client"

import { Copyable } from "@/components/copyable"
import { Button } from "@/components/ui/button"
import { getFullnames, getUsernames } from "@/lib/fetch"
import { cn } from "@/lib/utils"
import { useQuery, useQueryClient } from "@tanstack/react-query"

type DataFetchProps = {
	type: "fullnames" | "usernames"
}

export const DataFetch = ({ type }: DataFetchProps) => {
	const queryFn = type === "fullnames" ? getFullnames : getUsernames
	const { data } = useQuery({ queryKey: [type], queryFn })
	const queryClient = useQueryClient()

	if (!data) {
		return <div>Loading...</div>
	}

	return (
		<div className={cn("flex", "flex-col", "space-y-8")}>
			<div className={cn("flex", "flex-col", "space-y-3", "w-80")}>
				{data.map((value) => (
					<Copyable key={value} value={value} />
				))}
			</div>
			<Button
				variant={"outline"}
				className={cn("w-16")}
				onClick={() => queryClient.refetchQueries({ queryKey: [type] })}
			>
				more
			</Button>
		</div>
	)
}
