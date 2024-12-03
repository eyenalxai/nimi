import { AnotherButton } from "@/components/another-button"
import { NameDisplay } from "@/components/name-display"
import { cn } from "@/lib/utils"

type NamesDisplayProps = {
	names: string[]
}

export const NamesDisplay = ({ names }: NamesDisplayProps) => (
	<div className={cn("flex", "flex-col", "gap-y-8")}>
		<div className={cn("flex", "flex-col")}>
			{names.map((username) => (
				<NameDisplay key={username} name={username} />
			))}
		</div>
		<AnotherButton path="/usernames" />
	</div>
)
