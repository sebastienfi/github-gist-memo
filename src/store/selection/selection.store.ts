import { EntityState, EntityStore, StoreConfig } from '@datorama/akita'

import { formatToSelectionKeyMap, Selection } from './selection.model'

import { getSession } from '../storage'

export interface SelectionState extends EntityState<Selection> {
	entities: any
}

export const createInitialSelectionState = (): SelectionState => {
	const sessionEntities = getSession()
	const res = {
		ids: sessionEntities && sessionEntities.length ? sessionEntities.map(se => se.id) : [],
		entities: sessionEntities && sessionEntities.length ? formatToSelectionKeyMap(sessionEntities) : {},
	}
	return res
}

@StoreConfig({
	name: 'selection',
})
export class SelectionStore extends EntityStore<SelectionState> {
	constructor() {
		super(createInitialSelectionState())
	}
}

export const selectionStore = new SelectionStore()
