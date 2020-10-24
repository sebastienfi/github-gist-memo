import React, { useEffect, useMemo, useState } from 'react'

import useObservable from '../../hooks/useObservable'
import { GitHubUser } from '../../store/user/github-user.model'
import { gitHubUserQuery } from '../../store/user/user.query'
import { gitHubUserService } from '../../store/user/user.service'
import { gitHubUserStore } from '../../store/user/user.store'

import GitHubUserSearchView from './GitHubUserSearch.view'

const GitHubUserSearch = () => {
	const ghUsers$ = useObservable<GitHubUser[]>(gitHubUserQuery.githubUsers$)
	const isLoading = useObservable<boolean>(gitHubUserQuery.isLoading$)
	const [searchValue, setSearchValue] = useState<string>()
	const [error, setError] = useState()

	// Handles default state of store.
	useEffect(() => {
		gitHubUserStore.setLoading(false)
	}, [])

	// Handles updating search results based on modified input.
	useEffect(() => {
		if (searchValue) {
			const sub = gitHubUserService.getUsers(searchValue).subscribe({
				error: error => setError(error.message),
			})
			return () => sub.unsubscribe()
		}
	}, [searchValue])

	const onChange = (newSearch: string) => {
		console.log('About to call new search...', newSearch)
		setSearchValue(newSearch)
	}
	const onClose = () => setSearchValue(null)

	const isOpen = useMemo(() => !!searchValue && !!ghUsers$, [searchValue, ghUsers$])

	return (
		<GitHubUserSearchView
			ghUsers={ghUsers$}
			onChange={onChange}
			isLoading={isLoading}
			error={error}
			onClose={onClose}
			isOpen={isOpen}
		/>
	)
}

export default GitHubUserSearch
