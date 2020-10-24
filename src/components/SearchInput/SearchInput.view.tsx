import React, { useCallback, useEffect, useState } from 'react'

import { ButtonBase, InputBase, InputBaseProps, SvgIconTypeMap } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { makeStyles } from '@material-ui/core/styles'
import LoopIcon from '@material-ui/icons/Loop'
import SearchIcon from '@material-ui/icons/Search'

import { useDebounce } from '../../hooks/useDebounce'

const useStyles = makeStyles(theme => ({
	inputRoot: {
		border: 'solid 1px grey',
		height: 58,
		borderRadius: 5,
		padding: theme.spacing(4),
		fontSize: 18,
	},
	'@keyframes spinner': {
		'100%': { transform: 'rotate(360deg)' },
	},
	spinning: {
		animation: '$spinner 2500ms linear infinite',
	},
}))

export declare interface SearchInputViewProps {
	onChange?: (text: string) => void
	value?: string
	defaultValue?: string
	onSearch: (text: string) => void
	endAdornment?: JSX.Element
	searchIcon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
	isLoading?: boolean
	debounceRate?: number
}

const SearchInputView = ({
	onChange,
	value: controlledValue,
	defaultValue = '',
	onSearch,
	endAdornment,
	searchIcon: Icon = SearchIcon,
	isLoading = false,
	debounceRate = 100,
	...restProps
}: SearchInputViewProps & InputBaseProps) => {
	const classes = useStyles()
	const [value, setValue] = useState<string>(defaultValue)

	// Propagate onChange & onSearch events
	const debouncedOnChange = useCallback(useDebounce(onChange, debounceRate), [])
	useEffect(() => {
		if (onChange) {
			debouncedOnChange(value)
		}
	}, [value])
	return (
		<InputBase
			{...restProps}
			endAdornment={
				<ButtonBase onClick={() => onSearch(value)}>
					{isLoading ? <LoopIcon className={classes.spinning} /> : <Icon />}
				</ButtonBase>
			}
			classes={{
				root: classes.inputRoot,
			}}
			value={controlledValue || value}
			onChange={event => setValue(event.target.value)}
		/>
	)
}

export default SearchInputView
