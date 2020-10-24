import { ID } from '@datorama/akita'
import axios from 'axios'

import { Selection } from './selection.model'
import { selectionQuery } from './selection.query'
import { SelectionStore, selectionStore } from './selection.store'

import { saveSession } from '../storage'

export class SelectionService {
	constructor(private selectionStore: SelectionStore) {}

	update(userId: ID, selection: Selection) {
		this.selectionStore.upsert(userId, selection)
		selectionQuery.selectAll().subscribe(items => saveSession(items))
	}
}

export const selectionService = new SelectionService(selectionStore)
