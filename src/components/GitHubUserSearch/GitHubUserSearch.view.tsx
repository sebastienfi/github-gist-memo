import React, { useCallback, useEffect, useState } from 'react'
import useOnclickOutside from 'react-cool-onclickoutside'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useDebounce } from '../../hooks/useDebounce'
import { GitHubUser } from '../../store/user/github-user.model'

import SearchInput from '../SearchInput/SearchInput'
import UserItem from '../UserItem/UserItem'

const useStyles = makeStyles(theme => ({
	searchContainer: {
		position: 'relative',
	},
	flyover: {
		position: 'absolute',
		top: 100,
		overflowY: 'scroll',
		overflowX: 'hidden',
		backgroundColor: 'white',
		border: 'solid 1px lightgray',
		height: 500,
		width: '100%',
	},
	userSearchContainer: {
		paddingLeft: 150,
		paddingRight: 150,
	},
}))

export declare interface GitHubUserSearchViewProps {
	ghUsers: GitHubUser[]
	onChange: (newSearch: string) => void
	isLoading: boolean
	error?: string
	onClose: () => void
	isOpen: boolean
}

const GitHubUserSearchView = ({ isOpen, ghUsers, onChange, isLoading, error, onClose }: GitHubUserSearchViewProps) => {
	const classes = useStyles()
	const [searchValue, setSearchValue] = useState<string>()
	const ref = useOnclickOutside(() => {
		onClose()
	})

	// Handles propagating new search value to controller
	// Debounces as much as usefull so we don't hit RATE LIMIT too quickly.
	const debouncedOnChange = useCallback(useDebounce(onChange, 1000), [])
	useEffect(() => {
		debouncedOnChange(searchValue)
	}, [searchValue])

	return (
		<Grid container spacing={4} className={classes.userSearchContainer}>
			<Grid item xs={12}>
				<Grid container className={classes.searchContainer}>
					<Grid item xs={12}>
						<SearchInput
							placeholder='Rechercher un utilisateur sur GitHub'
							fullWidth={true}
							onChange={value => setSearchValue(value)}
							onSearch={value => setSearchValue(value)}
							isLoading={isLoading}
							debounceRate={200}
						/>
					</Grid>
					<Grid item xs={12}>
						{isOpen && searchValue && ghUsers && ghUsers.length > 0 && (
							<Grid container className={classes.flyover} style={{ zIndex: 100 }} ref={ref}>
								{ghUsers.map((user, idx) => (
									<Grid item xs={12} key={idx}>
										<UserItem user={user} onClose={onClose} />
									</Grid>
								))}
							</Grid>
						)}
					</Grid>
				</Grid>
			</Grid>

			{error && (
				<Grid item xs={12}>
					<Typography variant='h3'>{error}</Typography>
				</Grid>
			)}
			{searchValue && !ghUsers && (
				<Grid item xs={12}>
					<Typography variant='h3'>Aucun utilisateur ne correspond à cette recherche.</Typography>
				</Grid>
			)}
		</Grid>
	)
}

export default GitHubUserSearchView
