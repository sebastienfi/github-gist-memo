import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Star } from '@material-ui/icons'

import { GistFile } from '../../store/gist-file/gist-file.model'

const useStyles = makeStyles(theme => ({}))

export declare interface GistFileViewProps {
	isLoading: boolean

	gistFile: GistFile
}

const GistFilePanelView = ({ isLoading, gistFile }: GistFileViewProps) => {
	const classes = useStyles()

	return (
		<Grid container spacing={4}>
			<Grid item xs={12}>
				<Grid container spacing={4}>
					<Grid item xs={10}>
						<Typography variant='h2'>{`${gistFile.filename} - ${gistFile.language}`}</Typography>
					</Grid>
					<Grid item xs={2}>
						<Star onClick={() => console.log('onGistFileFavorite', gistFile)} />
					</Grid>
				</Grid>
			</Grid>
			{gistFile && gistFile.content && (
				<Grid item xs={12}>
					<SyntaxHighlighter language={gistFile.language} style={docco}>
						{gistFile.content}
					</SyntaxHighlighter>
				</Grid>
			)}
		</Grid>
	)
}

export default GistFilePanelView
