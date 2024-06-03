import { DataDisplay } from "@/components/ui/data-display"
import { getCachedFullnames } from "@/lib/cached"

export default async function FullnamesPage() {
	const fullnames = await getCachedFullnames()
	return <DataDisplay values={fullnames} type={"fullnames"} />
}
