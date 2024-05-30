import {useState} from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/actions/favoriteMoviesActions';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(state => state.favoriteMovies.favoriteMovies);
  const [favorite, setFavorite] = useState(favoriteMovies.some(favMovie => favMovie.id === movie.id));
  const imdb = () => {
    window.open(`${movie.imdb_url}`, '_blank');
  };
  // const [favoritebtn, setFavoritebtn] = useState(false);

  const handleFavoriteToggle = () => {
    if (favorite) {
      dispatch(removeFromFavorites(movie));
    } else {
      dispatch(addToFavorites(movie));
    }
    setFavorite(!favorite);

  };


  return (
    <div className='list '>
      <div>
      <h2>Title : {movie.movie}</h2>
      <p>Rating : {movie.rating}</p>
      <p> image : {movie.image}</p>
      <button className='btn' onClick={imdb}>
        Open imdb
      </button>
      
      </div>
      <div>
      <button onClick={(e) => handleFavoriteToggle(e)} className='border' >
        {favorite ? 'Unfavorite' : 'Favorite'}
      </button>
      </div>
      
    </div>
  );
};

export default MovieCard;

