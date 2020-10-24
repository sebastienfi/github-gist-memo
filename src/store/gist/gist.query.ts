import { QueryEntity } from '@datorama/akita'
import { map } from 'rxjs/operators'

import { gitHubUserQuery } from '../user/user.query'
import { GistState, GistStore, gistStore } from './gist.store'

export class GistQuery extends QueryEntity<GistState> {
	constructor(protected store: GistStore) {
		super(store)
	}

	gists$ = this.selectAll()
	isLoading$ = this.selectLoading()

	activeUserGists$ = this.selectAll().pipe(
		// tap(gists => console.log('activeUserGists', gists)),
		map(gists =>
			gists.filter(gist => {
				return gist.owner.id === gitHubUserQuery.getActiveId()
			}),
		),
	)
}

export const gistQuery = new GistQuery(gistStore)
