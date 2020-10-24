import { setLoading } from '@datorama/akita'
import axios from 'axios'
import { from, Observable } from 'rxjs'
import { map, tap } from 'rxjs/operators'

import { GistFile } from './gist-file.model'
import { gistFileQuery } from './gist-file.query'
import { GistFileStore, gistFileStore } from './gist-file.store'

export class GistFileService {
	constructor(private gistFileStore: GistFileStore) {}

	getGistFileContent(gistFilename: string, gistRawUrl: string): Observable<GistFile> {
		// https://api.github.com/users/mojombo/gists{/gist_id}
		this.gistFileStore.setLoading(true)
		return from(axios.get(gistRawUrl)).pipe(
			tap(res => {
				this.gistFileStore.update(gistFilename, gistFile => {
					return {
						...gistFile,
						content: res.data,
					}
				})
			}),
			map(res => {
				return gistFileQuery.getEntity(res.data.id)
			}),
		)
	}
}

export const gistFileService = new GistFileService(gistFileStore)
