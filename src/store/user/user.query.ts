import { QueryEntity } from '@datorama/akita'

import { GitHubUserState, GitHubUserStore, gitHubUserStore } from './user.store'

export class GitHubUserQuery extends QueryEntity<GitHubUserState> {
	constructor(protected store: GitHubUserStore) {
		super(store)
	}

	githubUsers$ = this.selectAll()
	isLoading$ = this.selectLoading()
}

export const gitHubUserQuery = new GitHubUserQuery(gitHubUserStore)
