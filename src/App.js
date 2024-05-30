import React from 'react';
import { Route, Routes , useNavigate } from 'react-router-dom';
import MovieList from './components/MovieList';
import FavoriteMoviesList from './components/FavoriteMoviesList';
import './index.css';


const App = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='header'>
  <div>MoviesApp</div>
  <div className='flex text-lg'>
    <div className='border' onClick={()=>{
      navigate("/")
    }}>Home</div>
    <div className='border ml-4' onClick={()=>{
      navigate("/favorites")
    }} >Favorites</div>
  </div>
    </div>
    <div className='routes'>
    <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/favorites" element={<FavoriteMoviesList />} />
      </Routes>
    </div>
      
      </>  
  );
};

export default App;
