import { DataFetch } from "@/components/data-fetch"
import { getUsernames } from "@/lib/fetch"
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"

export default async function UsernamesPage() {
	const queryClient = new QueryClient()

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
