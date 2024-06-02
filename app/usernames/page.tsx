import { DataFetch } from "@/components/data-fetch"
import { getUsernames } from "@/lib/fetch"
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"
import { headers } from "next/headers"

export default async function UsernamesPage() {
	const headersList = headers()
	const host = headersList.get("host")
	if (!host) throw new Error("Host header is missing")

	const queryClient = new QueryClient()
	await queryClient.prefetchQuery({
		queryKey: ["usernames", host],
		queryFn: async () => getUsernames(host)
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<DataFetch type="usernames" host={host} />
		</HydrationBoundary>
	)
}
