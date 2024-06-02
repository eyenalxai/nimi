"use client"

import { Copyable } from "@/components/copyable"
import { getUsernames } from "@/lib/fetch"
import { cn } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"

export const Usernames = () => {
	const { data } = useQuery({ queryKey: ["usernames"], queryFn: getUsernames })

	if (!data) {
		return <div>Loading...</div>
	}

	return (
		<div className={cn("flex", "flex-col", "space-y-3", "w-80")}>
			{data?.usernames.map((username) => (
				<Copyable key={username} value={username} />
			))}
		</div>
	)
}
