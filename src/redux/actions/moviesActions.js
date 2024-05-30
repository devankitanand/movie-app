export const fetchMoviesRequest = () => ({
    type: 'FETCH_MOVIES_REQUEST'
  });
  
  export const fetchMoviesSuccess = movies => ({
    type: 'FETCH_MOVIES_SUCCESS',
    payload: movies
  });
  
  export const fetchMoviesFailure = error => ({
    type: 'FETCH_MOVIES_FAILURE',
    payload: error
  });
  
  export const fetchMovies = () => {
    return async dispatch => {
      dispatch(fetchMoviesRequest());
      try {
        const response = await fetch('https://dummyapi.online/api/movies');
        const data = await response.json();
        dispatch(fetchMoviesSuccess(data));
      } catch (error) {
        dispatch(fetchMoviesFailure(error.message));
      }
    };
  };
  