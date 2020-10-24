import './App.css'

import React from 'react'

import { Grid } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import useObservable from './hooks/useObservable'

import GitHubUserSearch from './components/GitHubUserSearch/GitHubUserSearch'
import MainPanel from './components/MainPanel/MainPanel'
import SearchInput from './components/SearchInput/SearchInput'
import UserItem from './components/UserItem/UserItem'
import logo from './logo.svg'

const useStyles = makeStyles(theme => ({
	appContainer: {
		width: '100vw',
		height: '100vh',
		display: 'flex',
		margin: '32px auto',
	},
}))

function App() {
	const classes = useStyles()

	return (
		<Grid container spacing={4} className={classes.appContainer}>
			<Grid item xs={12}>
				<GitHubUserSearch />
			</Grid>
			<Grid item xs={1} style={{ height: '100%' }}>
				[Placeholder for favorites]
			</Grid>
			<Grid item xs={11} style={{ height: '100%', overflowY: 'scroll' }}>
				<MainPanel />
			</Grid>
		</Grid>
	)
}

export default App
