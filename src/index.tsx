import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { akitaDevtools } from '@datorama/akita'
import CssBaseline from '@material-ui/core/CssBaseline'

import * as serviceWorker from './serviceWorker'

import App from './App'

akitaDevtools()

ReactDOM.render(
	<React.StrictMode>
		<CssBaseline />
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
