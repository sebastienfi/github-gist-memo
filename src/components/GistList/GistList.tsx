import React, { useEffect } from 'react'

import useObservable from '../../hooks/useObservable'
import { GistFile } from '../../store/gist-file/gist-file.model'
import { gistFileQuery } from '../../store/gist-file/gist-file.query'
import { gistFileService } from '../../store/gist-file/gist-file.service'
import { gistFileStore } from '../../store/gist-file/gist-file.store'
import { Gist } from '../../store/gist/gist.model'
import { gistQuery } from '../../store/gist/gist.query'
import { gistService } from '../../store/gist/gist.service'
import { GitHubUser } from '../../store/user/github-user.model'
import { gitHubUserQuery } from '../../store/user/user.query'

import GistListView from './GistList.view'

const GistList = () => {
	const user$ = useObservable<GitHubUser>(gitHubUserQuery.selectActive())
	const isLoading = useObservable<boolean>(gitHubUserQuery.isLoading$)
	const activeUserGists$ = useObservable<Gist[]>(gistQuery.activeUserGists$)
	const activeGistFile$ = useObservable<GistFile>(gistFileQuery.selectActive())

	// Handles binding user's change gists query.
	useEffect(() => {
		if (user$) {
			gistService.getGists(user$.gists_url.replace('{/gist_id}', '')).subscribe()
		}
	}, [user$])

	const onSelectGistFile = (gistFile: GistFile) => {
		gistFileService.getGistFileContent(gistFile.filename, gistFile.raw_url).subscribe()
		gistFileStore.setActive(gistFile.filename)
	}

	if (!activeUserGists$) return null // TODO: This should return a loading state component instead, whereas the might return null.

	return (
		<GistListView
			user={user$}
			gists={activeUserGists$}
			isLoading={isLoading}
			onSelectGistFile={onSelectGistFile}
			activeGistFile={activeGistFile$}
		/>
	)
}

export default GistList
