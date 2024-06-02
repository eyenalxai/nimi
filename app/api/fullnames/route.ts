import { generateFullName } from "@/lib/generate"
import { NextResponse } from "next/server"

export async function GET(_request: Request): Promise<Response> {
	const fullnames = Array.from({ length: 10 }, () => generateFullName(2, 3))

	return NextResponse.json(fullnames)
}
