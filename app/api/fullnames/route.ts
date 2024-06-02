import { generateFullName } from "@/lib/generate"
import { respond } from "@/lib/respond"

export async function GET(_request: Request): Promise<Response> {
	const fullnames = Array.from({ length: 10 }, () => generateFullName(2, 3))

	return await respond(fullnames)
}
