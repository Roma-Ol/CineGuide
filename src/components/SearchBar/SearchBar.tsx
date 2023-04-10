import React, { FC } from 'react';

import './SearchBar.scss';

type SearchBarProps = {
	searchText: string,
	setSearchText: (newSearchText: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ searchText, setSearchText }) => {
	return (
			<input
				className='search-bar'
				type='text'
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				placeholder='Enter movie name'
			/>
	);
};

export default SearchBar;