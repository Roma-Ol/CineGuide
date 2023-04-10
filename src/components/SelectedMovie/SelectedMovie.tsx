import React, { FC, useContext } from 'react';
import { selectedMovieContext } from '../../contexts/MovieContext';
import { IMAGE_BASE_URL } from '../../services/apiConfig';

import './SelectedMovie.scss';
import RadialProgress from '@components/RadialProgress/RadialProgress';

const SelectedMovie: FC = () => {
	const { selectedMovie: movie, setSelectedMovie } = useContext(selectedMovieContext);

	const { title, vote_average, release_date, overview } = movie;

	const getRatingPercentage = (rating) => {
		return (rating * 10);
	}

	return (
		<div className='selected-movie container'>
			<button onClick={() => setSelectedMovie(null)}>X</button>
			<div className='selected-movie__poster'>
				<img
					src={`${IMAGE_BASE_URL}${movie.poster_path}`}
					alt={title}
				/>
				<h2 className='selected-movie__title'>
					{title}
				</h2>
			</div>

			<div className='border-imitate'>
				<div className='selected-movie__data'>

					<RadialProgress label={'Rating'} postFix={'%'} progress={getRatingPercentage(vote_average)}/>

					<div className='selected-movie__release-date'>
						Release date: {release_date}
					</div>

					<div className='selected-movie__overview'>
						<span>Overview:</span>
						{overview}
					</div>
				</div>
			</div>

		</div>
	);
};

export default SelectedMovie;