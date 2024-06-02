import { DataFetch } from "@/components/data-fetch"
import { getUsernames } from "@/lib/fetch"
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"
import { headers } from "next/headers"

export default async function UsernamesPage() {
	const queryClient = new QueryClient()
	const headersList = headers()
	console.log("host", headersList.get("host"))
	await queryClient.prefetchQuery({
		queryKey: ["usernames"],
		queryFn: getUsernames
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<DataFetch type="usernames" />
		</HydrationBoundary>
	)
}
