"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { copyToClipboard } from "@/lib/clipboard"
import type { PropsWithChildren, ReactNode } from "react"
import { toast } from "sonner"

type CopyButtonProps = {
	text: string
	children: ReactNode
}

export const CopyButton = ({
	text,
	children,
	...props
}: CopyButtonProps & PropsWithChildren & Omit<ButtonProps, "onClick">) => (
	<Button
		onClick={() =>
			copyToClipboard(text).match(
				() => toast("copied", { position: "top-center" }),
				(e) => toast.error(e, { position: "top-center" })
			)
		}
		{...props}
	>
		{children}
	</Button>
)
