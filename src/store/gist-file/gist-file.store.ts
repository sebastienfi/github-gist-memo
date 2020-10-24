import { ActiveState, EntityState, EntityStore, ID, StoreConfig } from '@datorama/akita'

import { GistFile } from './gist-file.model'

export interface GistFileState extends EntityState<GistFile>, ActiveState {
	active: ID
}

export const initialGistFileState: GistFileState = {
	active: null,
}

@StoreConfig({
	name: 'gist-file',
	idKey: 'filename',
})
export class GistFileStore extends EntityStore<GistFileState> {
	constructor() {
		super(initialGistFileState)
	}
}

export const gistFileStore = new GistFileStore()
