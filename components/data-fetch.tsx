"use client"

import { DataWrapper } from "@/components/ui/data-wrapper"
import { getFullnames, getUsernames } from "@/lib/fetch"
import { useQuery } from "@tanstack/react-query"

type DataFetchProps = {
	type: "fullnames" | "usernames"
}

export const DataFetch = ({ type }: DataFetchProps) => {
	const queryFn = type === "fullnames" ? getFullnames : getUsernames
	const { data, isFetching } = useQuery({ queryKey: [type], queryFn })

	if (!data || isFetching) {
		const data = Array.from({ length: 10 }, () => "...")

		return <DataWrapper data={data} type={type} isFetching={isFetching} />
	}

	return <DataWrapper data={data} type={type} isFetching={isFetching} />
}
