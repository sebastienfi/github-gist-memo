import React from 'react'

import { InputBaseProps } from '@material-ui/core'

import SearchInputView, { SearchInputViewProps } from './SearchInput.view'

const SearchInput = (props: SearchInputViewProps & InputBaseProps) => <SearchInputView {...props} />

export default SearchInput
