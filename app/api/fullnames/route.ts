import { getFullnames } from "@/lib/get"
import { respond } from "@/lib/respond"

export async function GET(_request: Request): Promise<Response> {
	const fullnames = await getFullnames()

	return await respond(fullnames)
}
