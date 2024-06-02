import { generateUsername } from "@/lib/generate"
import { NextResponse } from "next/server"

export async function GET(_request: Request): Promise<Response> {
	const usernames = Array.from({ length: 10 }, () => generateUsername(3))

	return NextResponse.json(usernames)
}
