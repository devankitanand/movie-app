const initialState = {
    favoriteMovies: []
  };
  
  const favoriteMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITES':
        return { ...state, favoriteMovies: [...state.favoriteMovies, action.payload] };
      case 'REMOVE_FROM_FAVORITES':
        return { ...state, favoriteMovies: state.favoriteMovies.filter(movie => movie.id !== action.payload.id) };
      default:
        return state;
    }
  };
  
  export default favoriteMoviesReducer;
  