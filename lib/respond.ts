import { headers } from "next/headers"
import { NextResponse } from "next/server"

export const respond = async (values: string[]) => {
	const headersList = headers()
	const contentType = headersList.get("content-type")

	if (contentType === null) {
		return NextResponse.json(values)
	}

	if (contentType === "application/json") {
		return new Response(`${JSON.stringify(values, null, 2)}\n`, {
			headers: {
				"content-type": "application/json"
			}
		})
	}

	if (contentType === "text/plain") {
		return new Response(`${values.join("\n")}\n`, {
			headers: {
				"content-type": "text/plain"
			}
		})
	}

	return NextResponse.json(values)
}
