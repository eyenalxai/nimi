import { DataDisplay } from "@/components/ui/data-display"
import { getCachedUsernames } from "@/lib/cached"

export default async function UsernamesPage() {
	const usernames = await getCachedUsernames()

	return <DataDisplay values={usernames} type={"usernames"} />
}
