import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { GistFile, transformToGistFile } from '../../store/gist-file/gist-file.model'
import { Gist } from '../../store/gist/gist.model'
import { GitHubUser } from '../../store/user/github-user.model'

import { dateFromNow } from '../../utils/date'

const useStyles = makeStyles(theme => ({}))

export declare interface GistListViewProps {
	user: GitHubUser
	isLoading: boolean
	gists: Gist[]
	onSelectGistFile: (gistFile: GistFile) => void
	activeGistFile?: GistFile
}

const GistListView = ({ user, isLoading, gists, onSelectGistFile, activeGistFile }: GistListViewProps) => {
	const classes = useStyles()

	return (
		<Grid container spacing={4}>
			{gists.map((g, idx) => (
				<Grid item xs={12} key={idx} style={{ minWidth: 400 }}>
					<Grid container style={{ borderBottom: 'solid 1px grey' }}>
						<Grid item xs={12}>
							<Typography variant='body2'>{g.description}</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography
								variant='body2'
								style={{ cursor: 'pointer' }}
								onClick={() => window.open(g.comments_url, '_blank')}
							>{`View comments (${g.comments})`}</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='caption'>{dateFromNow(g.updated_at)}</Typography>
						</Grid>
						<Grid item xs={12}>
							{Object.keys(g.files).map((filename, index) => {
								const gistFile = transformToGistFile(g.files[filename])
								return (
									<Grid item xs={12} key={`${idx} ${index}`} style={{ minWidth: 400 }}>
										<Typography
											variant={activeGistFile && activeGistFile.filename === gistFile.filename ? 'body1' : 'body2'}
											onClick={() => onSelectGistFile(gistFile)}
											style={{ cursor: 'pointer' }}
										>{`${gistFile.filename} - [${gistFile.language}]`}</Typography>
									</Grid>
								)
							})}
						</Grid>
					</Grid>
				</Grid>
			))}
		</Grid>
	)
}

export default GistListView
