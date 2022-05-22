// import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbare from './Navbare';
import Rat from './Rat';
import Search from './Search';

function App() {
  const data = [
  
    { 
      id:Math.random(),
      Title : 'The Holiday ' ,
      Description :' Comedies' ,
      PosterURL :'https://media.senscritique.com/media/000019851249/300/the_holiday.jpg',
      rating: 4,
  
    },
    {
      id:Math.random(),
      Title : 'Love like You',
      Description :'Romantic Dramas',
      PosterURL :'https://images.moviefit.me/t/o/98786-the-love-is-similar-to-you.jpg',
      rating: 5,
    },
    {
      id:Math.random(),
      Title : 'Lucy',
      Description :'Action',
      PosterURL :'https://www.horreur.net/sites/default/files/upload/lucy-poster-scarlett-besson_0.jpg',
      rating: 3,
      
    },
  
  ]
  const [movies, setMovies] = useState(data)
 
  return (
    <div className="App">
     <Navbare/>
      <MovieList  movies={movies}  />
     <Rat/>
     <Search/>
    </div>
  );
}

export default App;
