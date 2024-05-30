import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import favoriteMoviesReducer from './favoriteMoviesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  favoriteMovies: favoriteMoviesReducer
});

export default rootReducer;
