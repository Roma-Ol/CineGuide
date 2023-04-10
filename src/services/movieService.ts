import axios from 'axios';
import { API_KEY, TMDB_BASE_URL } from './apiConfig';
import { MovieType } from '@customTypes/types';

// export const getPopularMovies = async (): Promise<Movie[]> => {
// 	try {
// 		const response = await axios.get(
// 			`${TMDB_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
// 		);
// 		return response.data.results;
// 	} catch (error) {
// 		console.error('Error fetching popular movies:', error);
// 		return [];
// 	}
// };

export const getMovieByName = async (name: string): Promise<MovieType[]> => {
	try {
		const response = await axios.get(
			`${TMDB_BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
				name,
			)}&page=1&include_adult=false`,
		)

		console.log(response.data.results);
		return response.data.results;
	} catch (error) {
		console.error('Error fetching movie by name:', error);
		return [];
	}
};

