import { NavigationWrapper } from "@/components/navigation-wrapper"
import { DataDisplay } from "@/components/ui/data-display"
import { getCachedUsernames } from "@/lib/cached"

export const revalidate = 600

export default async function UsernamesPage() {
	const usernames = await getCachedUsernames()

	return (
		<NavigationWrapper activePath={"usernames"}>
			<DataDisplay values={usernames} type={"usernames"} />
		</NavigationWrapper>
	)
}
