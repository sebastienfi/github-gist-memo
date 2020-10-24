import { ActiveState, EntityState, EntityStore, ID, StoreConfig } from '@datorama/akita'

import { Gist } from './gist.model'

export interface GistState extends EntityState<Gist>, ActiveState {
	active: ID
}

export const initialGistState: GistState = {
	active: null,
}

@StoreConfig({
	name: 'gist',
})
export class GistStore extends EntityStore<GistState> {
	constructor() {
		super(initialGistState)
	}
}

export const gistStore = new GistStore()
