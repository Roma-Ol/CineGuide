import React, { useDeferredValue, useEffect, useState } from 'react';
import { getMovieByName } from './services/movieService';
import SearchBar from '@components/SearchBar/SearchBar';
import { MovieType } from '@customTypes/types';
import MoviesSuggestions from '@components/MoviesSuggestions/MoviesSuggestions';
import './assets/styles/App.scss';

import { moviesSuggestionContext, selectedMovieContext } from './contexts/MovieContext';
import SelectedMovie from '@components/SelectedMovie/SelectedMovie';
import withParticlesBackground from './hoc/withParticlesBackground';
import clsx from 'clsx';

const App: React.FC = () => {
	const { Provider: MoviesSuggestionsProvider } = moviesSuggestionContext;
	const { Provider: SelectedMovieProvider } = selectedMovieContext;

	const [moviesSuggestions, setMoviesSuggestions] = useState<MovieType[]>([]);
	const [selectedMovie, setSelectedMovie] = useState<MovieType>(null);
	const [searchText, setSearchText] = useState<string>('');
	const [isFetching, setIsFetching] = useState(false);

	const moviesSuggestionsDeferred = useDeferredValue(moviesSuggestions);

	useEffect(() => {
		const fetchMovies = async () => {
			setIsFetching(true);
			const movies = await getMovies();
			setMoviesSuggestions(movies);
			setIsFetching(false);
		};

		fetchMovies().catch((error) => {
			console.error('Error fetching movies:', error);
			setIsFetching(false);
		});
	}, [searchText]);

	const getMovies = async () => {
		return await getMovieByName(searchText);
	};

	return (
		<main id='main' className='main container'>
			<div className={`user-interaction ${clsx(moviesSuggestions.length > 0 && 'with-suggestions')}`}>
				{selectedMovie ?
					<SelectedMovieProvider value={{ selectedMovie, setSelectedMovie }}>
						<SelectedMovie />
					</SelectedMovieProvider>
					: <>
						<SearchBar searchText={searchText}
											 setSearchText={setSearchText} />

						{moviesSuggestions.length > 0 &&
							<MoviesSuggestionsProvider
								value={{
									moviesSuggestionsDeferred,
									setMoviesSuggestions,
									setSelectedMovie,
									setSearchText,
								}}>
								<MoviesSuggestions />
							</MoviesSuggestionsProvider>
						}

						{isFetching && <div className='progress'><span>⏳</span></div>}

						{(moviesSuggestions.length === 0 && searchText !== '' && !isFetching) &&
							<div className='no-suggestions'>No movies found.</div>
						}
					</>
				}
			</div>
		</main>
	);
};

export default withParticlesBackground(App);
