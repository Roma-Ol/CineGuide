import React, { FC, useContext } from 'react';

import { MovieType } from '@customTypes/types';
import { IMAGE_BASE_URL } from '../../services/apiConfig';
import { moviesSuggestionContext } from '../../contexts/MovieContext';
import './MoviesSuggestions.scss';

const MoviesSuggestions: FC = () => {
	const {
		moviesSuggestionsDeferred,
		setMoviesSuggestions,
		setSelectedMovie,
		setSearchText,
	} = useContext(moviesSuggestionContext);

	const handleMovieSelection = (selectedMovie) => {
		setSearchText('');
		setSelectedMovie(selectedMovie);
		setMoviesSuggestions([]);
	};

	return (
		<ul className='movies-suggestions'>
			{moviesSuggestionsDeferred.map((movie) => (
				<li key={movie.id} className='movie'>
					<a onClick={() => handleMovieSelection(movie)}>
						{movie.title}
					</a>
				</li>
			))}
		</ul>
	);
};

export default MoviesSuggestions;