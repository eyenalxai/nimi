import { NavigationWrapper } from "@/components/navigation-wrapper"
import { DataDisplay } from "@/components/ui/data-display"
import { getCachedFullnames } from "@/lib/cached"

export const revalidate = 600

export default async function FullnamesPage() {
	const fullnames = await getCachedFullnames()

	return (
		<NavigationWrapper activePath={"fullnames"}>
			<DataDisplay values={fullnames} type={"fullnames"} />
		</NavigationWrapper>
	)
}
