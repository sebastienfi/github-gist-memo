import React from 'react'

import useObservable from '../../hooks/useObservable'
import { GistFile } from '../../store/gist-file/gist-file.model'
import { gistFileQuery } from '../../store/gist-file/gist-file.query'

import GistFilePanelView from './GistFilePanel.view'

const GistFilePanel = () => {
	const isLoading = useObservable<boolean>(gistFileQuery.isLoading$)
	const activeGistFile$ = useObservable<GistFile>(gistFileQuery.selectActive())

	if (!activeGistFile$) return null // TODO: This should return a loading state component instead, whereas the might return null.

	return <GistFilePanelView isLoading={isLoading} gistFile={activeGistFile$} />
}

export default GistFilePanel
