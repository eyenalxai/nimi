import { generateUsernames } from "@/lib/generate"

export default function Usernames() {
	const usernames = generateUsernames({ count: 10, minLength: 3 })
	return (
		<div>
			<h1>Usernames</h1>
			<ul>
				{usernames.map((username) => (
					<li key={username}>{username}</li>
				))}
			</ul>
		</div>
	)
}
