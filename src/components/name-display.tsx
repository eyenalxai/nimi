import { CopyButton } from "@/components/copy-button"
import { cn } from "@/lib/utils"
import { Copy } from "lucide-react"

type NameDisplayProps = {
	name: string
}

export const NameDisplay = ({ name }: NameDisplayProps) => (
	<div
		className={cn("w-full", "flex", "justify-start", "items-center", "gap-x-2")}
	>
		<CopyButton text={name} variant={"ghost"} size={"icon"}>
			<Copy />
		</CopyButton>

		<span className={cn("text-lg")}>{name}</span>
	</div>
)
