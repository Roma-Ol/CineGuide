import { createContext } from 'react';
import { MovieType } from '@customTypes/types';

interface MoviesSuggestionContextType {
	moviesSuggestionsDeferred: MovieType[];
	setMoviesSuggestions: (value: (((prevState: MovieType[]) => MovieType[]) | MovieType[])) => void;
	setSelectedMovie: (value: (((prevState: MovieType) => MovieType) | MovieType)) => void;
	setSearchText: (value: (((prevState: string) => string) | string)) => void;
}

interface SelectedMovieContextType {
	selectedMovie: MovieType | null;
	setSelectedMovie: (value: (((prevState: MovieType) => MovieType) | MovieType)) => void;
}

export const moviesSuggestionContext = createContext<MoviesSuggestionContextType>({
	moviesSuggestionsDeferred: [],
	setMoviesSuggestions: () => {},
	setSelectedMovie: () => {},
	setSearchText: () => {},
});

export const selectedMovieContext = createContext<SelectedMovieContextType>({
	selectedMovie: null,
	setSelectedMovie: () => {},
});