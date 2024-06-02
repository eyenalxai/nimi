import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

type CopyableProps = {
	value: string
}

export const Copyable = ({ value }: CopyableProps) => {
	const [copied, setCopied] = useState(false)

	useEffect(() => {
		if (copied) {
			const timeout = setTimeout(() => {
				setCopied(false)
			}, 2000)

			return () => {
				clearTimeout(timeout)
			}
		}
	}, [copied])

	return (
		<div key={value} className={cn("flex", "flex-row", "items-center", "space-x-4")}>
			<CopyToClipboard text={value}>
				<Button
					className={cn(
						copied && [
							["dark:bg-emerald-600", "dark:hover:bg-emerald-700"],
							["bg-emerald-200", "hover:bg-emerald-100"]
						]
					)}
					size={"sm"}
					variant={"outline"}
					onClick={() => setCopied(true)}
				>
					copy
				</Button>
			</CopyToClipboard>
			<p className={cn("text-xl", "lowercase")}>{value}</p>
		</div>
	)
}
