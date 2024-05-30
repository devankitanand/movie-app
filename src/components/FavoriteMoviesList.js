import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const FavoriteMoviesList = () => {
  const favoriteMovies = useSelector(state => state.favoriteMovies.favoriteMovies);

  return (
    <div className='wrappperlist'>
      {favoriteMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default FavoriteMoviesList;
