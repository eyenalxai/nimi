import { CopyButton } from "@/components/copy-button"
import { Button } from "@/components/ui/button"
import { generateUsernames } from "@/lib/generate"
import { cn } from "@/lib/utils"
import { Copy } from "lucide-react"
import { revalidatePath } from "next/cache"

export default function Usernames() {
	const usernames = generateUsernames({ count: 10, minLength: 3 })
	return (
		<div className={cn("flex", "flex-col", "gap-y-8")}>
			<div className={cn("flex", "flex-col")}>
				{usernames.map((username) => (
					<div
						key={username}
						className={cn(
							"w-full",
							"flex",
							"justify-start",
							"items-center",
							"gap-x-2"
						)}
					>
						<CopyButton text={username} variant={"ghost"} size={"icon"}>
							<Copy />
						</CopyButton>

						<span className={cn("text-lg")}>{username}</span>
					</div>
				))}
			</div>
			<Button
				variant={"ghost"}
				className={cn("w-fit")}
				onClick={async () => {
					"use server"
					return revalidatePath("/usernames", "page")
				}}
			>
				another
			</Button>
		</div>
	)
}
