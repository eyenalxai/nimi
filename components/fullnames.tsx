"use client"

import { Copyable } from "@/components/copyable"
import { getFullnames } from "@/lib/fetch"
import { cn } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"

export const Fullnames = () => {
	const { data } = useQuery({ queryKey: ["fullnames"], queryFn: getFullnames })

	if (!data) {
		return <div>Loading...</div>
	}

	return (
		<div className={cn("flex", "flex-col", "space-y-3", "w-80")}>
			{data?.fullnames.map((fullname) => (
				<Copyable key={fullname} value={fullname} />
			))}
		</div>
	)
}
