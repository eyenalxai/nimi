import { NamesDisplay } from "@/components/names-display"
import { generateUsernames } from "@/lib/generate"

export default function Usernames() {
	return <NamesDisplay names={generateUsernames({ count: 10, min: 3 })} />
}
