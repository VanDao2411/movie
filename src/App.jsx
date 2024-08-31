
import Movie_Card from './Components/Movie_Card/Movie_Card';
import Moive_Player from './Components/Movie_Player/Moive_Player';
import Navbar from './Components/Navbar/Navbar';
import Home from './Page/Home/Home'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { Route, Routes } from 'react-router-dom';
import MoviePage from './Page/Movie/MoviePage/MoviePage';
import MoviePlayer from './Page/Movie/MoviePlayer/MoviePlayer';
import Footer from './Page/Footer/Footer';
import Search from './Components/Search/Search';
// import MovieDetail from './Page/Movie/MovieDetail/MovieDetail';

function App() {

  return (
    <div className="App bg-black-1 m-0 p-0 w-screen h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:slug" element={<Movie_Card />} />
        <Route path="/movie/:slug/:name" element={<Moive_Player/>} />
        <Route path="/movie-favorite/:id/:slug" element={<MoviePage/>} />
        <Route path="/movie-favorite/:id/:slug/play/" element={<MoviePlayer/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
