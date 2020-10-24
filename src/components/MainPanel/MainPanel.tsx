import React, { useEffect, useState } from 'react'

import useObservable from '../../hooks/useObservable'
import { GistFile } from '../../store/gist-file/gist-file.model'
import { gistFileQuery } from '../../store/gist-file/gist-file.query'
import { GitHubUser } from '../../store/user/github-user.model'
import { gitHubUserQuery } from '../../store/user/user.query'
import { gitHubUserStore } from '../../store/user/user.store'

import MainPanelView from './MainPanel.view'

const MainPanel = () => {
	const user$ = useObservable<GitHubUser>(gitHubUserQuery.selectActive())
	const isLoading = useObservable<boolean>(gitHubUserQuery.isLoading$)
	const [error, setError] = useState()
	const activeGistFile$ = useObservable<GistFile>(gistFileQuery.selectActive())

	// Handles default state of store.
	useEffect(() => {
		gitHubUserStore.setLoading(false)
	}, [])

	if (!user$) return null

	return <MainPanelView user={user$} isLoading={isLoading} error={error} activeGistFile={activeGistFile$} />
}

export default MainPanel
