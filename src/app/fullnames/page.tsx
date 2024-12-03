import { NamesDisplay } from "@/components/names-display"
import { generateFullNames, generateUsernames } from "@/lib/generate"

export default function Usernames() {
	return (
		<NamesDisplay names={generateFullNames({ count: 10, min: 1, max: 4 })} />
	)
}
