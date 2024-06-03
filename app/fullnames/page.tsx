import { DataFetch } from "@/components/data-fetch"
import { getFullnames } from "@/lib/fetch"
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"

export default async function FullnamesPage() {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery({
		queryKey: ["fullnames"],
		queryFn: getFullnames
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<DataFetch type="fullnames" />
		</HydrationBoundary>
	)
}
