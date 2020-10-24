import React from 'react'

import { Avatar, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LoopIcon from '@material-ui/icons/Loop'
import SearchIcon from '@material-ui/icons/Search'

import useObservable from '../../hooks/useObservable'
import { GistFile } from '../../store/gist-file/gist-file.model'
import { GitHubUser } from '../../store/user/github-user.model'

import GistFilePanel from '../GistFilePanel/GistFilePanel'
import GistList from '../GistList/GistList'
import SearchInput from '../SearchInput/SearchInput'
import UserItem from '../UserItem/UserItem'

const useStyles = makeStyles(theme => ({
	mainPanelContainer: {},
}))

export declare interface MainPanelViewProps {
	user: GitHubUser
	isLoading: boolean
	error?: string
	activeGistFile?: GistFile
}

const MainPanelView = ({ user, isLoading, error, activeGistFile }: MainPanelViewProps) => {
	const classes = useStyles()

	return (
		<Grid container spacing={4} className={classes.mainPanelContainer}>
			<Grid item xs={4}>
				<Grid container spacing={4} style={{ width: 'max-content' }}>
					<Grid item xs={3}>
						<Avatar src={user.avatar_url} style={{ width: 50, height: 50, cursor: 'pointer' }} />
					</Grid>
					<Grid item xs={8}>
						<Typography variant='h5' style={{ cursor: 'pointer' }}>
							{user.login}
						</Typography>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<GistList />
				</Grid>
			</Grid>
			<Grid item xs={8}>
				<GistFilePanel />
			</Grid>
		</Grid>
	)
}

export default MainPanelView
