import { QueryEntity } from '@datorama/akita'

import { SelectionState, SelectionStore, selectionStore } from './selection.store'

export class SelectionQuery extends QueryEntity<SelectionState> {
	constructor(protected store: SelectionStore) {
		super(store)
	}

	selections$ = this.selectAll()
}

export const selectionQuery = new SelectionQuery(selectionStore)
