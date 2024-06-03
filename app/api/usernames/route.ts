import { getUsernames } from "@/lib/get"
import { respond } from "@/lib/respond"

export async function GET(_request: Request): Promise<Response> {
	const usernames = await getUsernames()

	return await respond(usernames)
}
