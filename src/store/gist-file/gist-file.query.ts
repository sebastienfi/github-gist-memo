import { QueryEntity } from '@datorama/akita'

import { GistFileState, GistFileStore, gistFileStore } from './gist-file.store'

export class GistFileQuery extends QueryEntity<GistFileState> {
	constructor(protected store: GistFileStore) {
		super(store)
	}

	gistFiles$ = this.selectAll()
	isLoading$ = this.selectLoading()
}

export const gistFileQuery = new GistFileQuery(gistFileStore)
