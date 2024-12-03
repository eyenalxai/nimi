import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { revalidatePath } from "next/cache"

type AnotherButtonProps = {
	path: string
}

export const AnotherButton = ({ path }: AnotherButtonProps) => (
	<Button
		variant={"ghost"}
		className={cn("w-fit")}
		onClick={async () => {
			"use server"
			return revalidatePath(path, "page")
		}}
	>
		another
	</Button>
)
