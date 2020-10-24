import React, { useMemo } from 'react'

import useObservable from '../../hooks/useObservable'
import { gistFileStore } from '../../store/gist-file/gist-file.store'
import { Selection } from '../../store/selection/selection.model'
import { selectionQuery } from '../../store/selection/selection.query'
import { selectionService } from '../../store/selection/selection.service'
import { GitHubUser } from '../../store/user/github-user.model'
import { gitHubUserStore } from '../../store/user/user.store'

import UserItemView from './UserItem.view'

export declare interface UserItemProps {
	user: GitHubUser
	onClose: () => void
}

const UserItem = ({ user, onClose }: UserItemProps) => {
	const selections$ = useObservable(selectionQuery.selections$)

	const userSelection: Selection = useMemo(() => selections$?.find((s: Selection) => s.id === user.id) as Selection, [
		user,
		selections$,
	])

	const onUserTypeChoiceChange = (storeKey: string, value: boolean) => {
		selectionService.update(user.id, { ...userSelection, [storeKey]: value })
	}

	const onUserSelect = (user: GitHubUser) => {
		onClose()
		gistFileStore.setActive(null)
		gitHubUserStore.setActive(user.id)
	}

	return (
		<UserItemView
			user={user}
			selection={userSelection}
			onUserTypeChoiceChange={onUserTypeChoiceChange}
			onUserSelect={onUserSelect}
		/>
	)
}

export default UserItem
