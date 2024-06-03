"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

type CopyableProps = {
	value: string
	disabled: boolean
}

export const Copyable = ({ value, disabled }: CopyableProps) => {
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
					disabled={disabled}
					className={cn(
						copied && [
							["dark:bg-emerald-600", "dark:hover:bg-emerald-700"],
							["bg-emerald-200", "hover:bg-emerald-100"]
						],
						"transition",
						"duration-1000"
					)}
					size={"sm"}
					variant={"outline"}
					onClick={() => setCopied(true)}
				>
					copy
				</Button>
			</CopyToClipboard>
			<p className={cn("text-xl", "lowercase", "transition", "duration-1000", disabled && "opacity-50")}>{value}</p>
		</div>
	)
}
