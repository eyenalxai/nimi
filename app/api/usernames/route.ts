import { generateUsername } from "@/lib/generate"
import { respond } from "@/lib/respond"

export async function GET(_request: Request): Promise<Response> {
	const usernames = Array.from({ length: 10 }, () => generateUsername(3))

	return await respond(usernames)
}
