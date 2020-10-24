import { ID } from '@datorama/akita'

import { GistFileKeyMap } from '../gist-file/gist-file.model'
import { GitHubUser } from '../user/github-user.model'

export class Gist {
	id: ID //b1f48e80da8ceece3707

	url: string //https://api.github.com/gists/b1f48e80da8ceece3707
	forks_url: string //https://api.github.com/gists/b1f48e80da8ceece3707/forks
	commits_url: string //https://api.github.com/gists/b1f48e80da8ceece3707/commits

	node_id: string //MDQ6R2lzdGIxZjQ4ZTgwZGE4Y2VlY2UzNzA3
	git_pull_url: string //https://gist.github.com/b1f48e80da8ceece3707.git
	git_push_url: string //https://gist.github.com/b1f48e80da8ceece3707.git
	html_url: string //https://gist.github.com/b1f48e80da8ceece3707
	files: GistFileKeyMap
	public: boolean
	created_at: string //2014-09-30T00:16:22Z
	updated_at: string //2018-04-08T01:57:27Z
	description: string //
	comments: 1
	user: null
	comments_url: string //https://api.github.com/gists/b1f48e80da8ceece3707/comments
	owner: GitHubUser
	truncated: boolean
}
