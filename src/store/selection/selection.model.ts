import { ID } from '@datorama/akita'

export class Selection {
	id: ID
	option_1?: boolean
	option_2?: boolean
	option_3?: boolean
	option_4?: boolean
	option_5?: boolean
}

export interface SelectionKeyMap {
	[key: string]: Selection[]
}

export function formatToSelectionKeyMap(selections: Selection[]): SelectionKeyMap {
	let keymap: SelectionKeyMap = {}
	selections.map(s => {
		Object.assign(keymap, { [s.id]: s as Selection })
	})
	return keymap
}
