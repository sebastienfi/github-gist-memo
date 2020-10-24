import { GitHubUser } from '../user/github-user.model'

export class SearchUsersResponse {
	total_count: number
	incomplete_results: boolean
	items: GitHubUser[]
}
