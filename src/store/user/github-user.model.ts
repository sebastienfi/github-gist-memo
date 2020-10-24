import { ID } from '@datorama/akita'

export class GitHubUser {
	login: string // mojombo
	id: ID
	node_id: string // MDQ6VXNlcjE=
	avatar_url: string // https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png
	gravatar_id: string //
	url: string // https://api.github.com/users/mojombo
	html_url: string // https://github.com/mojombo
	followers_url: string // https://api.github.com/users/mojombo/followers
	subscriptions_url: string // https://api.github.com/users/mojombo/subscriptions
	organizations_url: string // https://api.github.com/users/mojombo/orgs
	repos_url: string // https://api.github.com/users/mojombo/repos
	received_events_url: string // https://api.github.com/users/mojombo/received_events
	type: string // User
	score: number
	following_url: string // https://api.github.com/users/mojombo/following{/other_user}
	gists_url: string // https://api.github.com/users/mojombo/gists{/gist_id}
	starred_url: string // https://api.github.com/users/mojombo/starred{/owner}{/repo}
	events_url: string // https://api.github.com/users/mojombo/events{/privacy}
	site_admin: boolean
}
