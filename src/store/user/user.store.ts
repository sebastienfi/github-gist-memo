import { ActiveState, EntityState, EntityStore, ID, StoreConfig } from '@datorama/akita'

import { GitHubUser } from './github-user.model'

export interface GitHubUserState extends EntityState<GitHubUser>, ActiveState {
	active: ID
	errors: {
		isRateLimitReached: boolean
	}
}

export const initialGitHubUserState: GitHubUserState = {
	active: null,
	errors: {
		isRateLimitReached: false,
	},
}

@StoreConfig({
	name: 'githubuser',
})
export class GitHubUserStore extends EntityStore<GitHubUserState> {
	constructor() {
		super(initialGitHubUserState)
	}
}

export const gitHubUserStore = new GitHubUserStore()
