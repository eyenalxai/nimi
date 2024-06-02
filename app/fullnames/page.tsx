import { DataFetch } from "@/components/data-fetch"
import { getFullnames } from "@/lib/fetch"
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"
import { headers } from "next/headers"

export default async function FullnamesPage() {
	const headersList = headers()
	const host = headersList.get("host")
	if (!host) throw new Error("Host header is missing")

	const queryClient = new QueryClient()
	await queryClient.prefetchQuery({
		queryKey: ["fullnames", host],
		queryFn: async () => getFullnames(host)
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<DataFetch type="fullnames" host={host} />
		</HydrationBoundary>
	)
}
