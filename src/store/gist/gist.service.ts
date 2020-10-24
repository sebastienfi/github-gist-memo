import { setLoading } from '@datorama/akita'
import axios from 'axios'
import { from, Observable } from 'rxjs'
import { map, tap } from 'rxjs/operators'

import { gistFileStore } from '../gist-file/gist-file.store'
import { Gist } from './gist.model'
import { GistStore, gistStore } from './gist.store'

export class GistService {
	constructor(private gistStore: GistStore) {}

	getGists(userGistURL: string): Observable<Gist[]> {
		// https://api.github.com/users/mojombo/gists
		this.gistStore.setLoading(true)
		return from(axios.get(userGistURL)).pipe(
			tap(res => {
				this.gistStore.add(res.data)
				this.gistStore.setLoading(false)
			}),
			tap(res => {
				gistFileStore.setLoading(true)
				// There IS a more elegant way to do this.
				const gists: Gist[] = res.data
				gists.map(g => {
					Object.keys(g.files).map(k => gistFileStore.add(g.files[k]))
				})
				gistFileStore.setLoading(false)
			}),
			map(res => res.data),
		)
	}
}

export const gistService = new GistService(gistStore)
