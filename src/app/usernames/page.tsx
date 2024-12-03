import { NamesDisplay } from "@/components/names-display"
import { generateUsernames } from "@/lib/generate"

export const revalidate = 600

export default function Usernames() {
	return <NamesDisplay names={generateUsernames({ count: 10, min: 3 })} />
}
