// eslint-disable-next-line no-unused-vars
import React from 'react'
// import Navbar from '../../Components/Navbar/Navbar'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Banner from '../../Components/Banner/Banner'
import Highlight from '../../Components/Highlight/Highlight'
import MovieList from '../../Components/MovieList/MovieList'
import Movie_bo from '../../Components/Movie_bo/Movie_bo'
import Movie_cartoon from '../../Components/Movie_cartoon/Movie_cartoon'
import Movie_Theaters from '../../Components/Movie_Theaters/Movie_Theaters'
import Performer from '../../Components/Movie_trainler/Performer'
import Movie_favoter from '../../Components/Movie_favoter/Movie_favoter'

const Home = () => {
  return (
    <div className="home">
        <TitleCards/>
        <div className="w-full h-[580px] bg-black-1  flex gap-3">
            <div className="w-[68%]">
                <Banner/>
            </div>
            <div className="w-[30%]">
              <Highlight/>
            </div>
        </div>
        <div className=" bg-black-1 w-full h-full flex gap-1">
           <div className="w-[68%]">  
              <MovieList/>   
            </div>
            <div className="w-[30%]">
              <Movie_Theaters/>
            </div>
        </div>
        <div className="bg-black-1 w-full h-full flex gap-1">
          <div className="w-[68%]">
            <Movie_bo/> 
            <Movie_favoter/>
            <Movie_cartoon/>
          </div>
          <div className="w-[30%]">
            <Performer/>  
          </div>
        </div>
    </div>
  )
}

export default Home