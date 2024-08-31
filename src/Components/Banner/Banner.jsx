// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import time from '../../assets/time.png';
import calendar from '../../assets/calendar.png';
import Movies_wacthes from '../../Data/Movie-watches/Movie-watches';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Movies_wacthes.length); 
  };

  const prevBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Movies_wacthes.length) % Movies_wacthes.length); 
  };
  useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Movies_wacthes.length);
        }, 5000); 

        return () => clearInterval(interval);
    }, []); 
  const moviesFavoter = Movies_wacthes.map(({ id, slug, name, thumb_url, episode_current, view, poster_url, origin_name, content, time, actor, category, year }) =>
    ({ id, slug, name, thumb_url, episode_current, view, poster_url, origin_name, content, time, actor, category, year }));
  const movie = moviesFavoter[currentIndex];

  return (
    <div className="relative h-[600px] p-5 rounded">
      <img className="w-full h-[500px] m-3 rounded" src={movie.poster_url} alt="" />
      <div className="bg-black-2 opacity-65 absolute right-2 top-8 w-[600px] h-[500px] rounded">
        <p className="absolute m-5 pl-5 text-[35px] text-white font-semibold line-clamp-1">{movie.name}</p>
        <div className="flex">
          <img className="w-[25px] h-[25px] absolute mt-[80px] left-[40px]" src={time} alt="" />
          <h4 className="text-white font-semibold text-[15px] absolute left-[70px] mt-[80px] ">{movie.time}</h4>
          <img className="w-[25px] h-[25px] absolute mt-[80px] left-[190px]" src={calendar} alt="" />
          <h5 className="text-white font-semibold text-[15px] absolute left-[220px] mt-[80px]">{movie.year}</h5>
        </div>
        <div className="absolute top-[120px] left-[40px] bg-red-600 text-xs px-1 py-1 rounded text-white">HD | VIETSUB + LỒNG TIẾNG</div>
        <p className="text-white font-semibold text-[14px] absolute left-[40px] mt-[160px] mr-4 line-clamp-4">{movie.content}</p>
        <p className="text-white font-semibold text-[15px] absolute left-[40px] mt-[260px]">Thể loại: {movie.category} <br />
          Đạo Diễn: {movie.director} <br />
          Diễn Viên: {movie.actor}
        </p>

        <button className="absolute top-[380px] left-[40px] bg-red-600 px-3 py-2 rounded text-[20px] font-semibold text-white" onClick={nextBanner}>
          Xem Phim
        </button>
      </div>
      <button className="absolute top-[260px] left-8 bg-black-2 opacity-50   px-3 py-2 rounded text-[20px] font-semibold text-white" onClick={prevBanner}>
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </button>
      <button className="absolute top-[260px] right-2 bg-black-2 opacity-50 px-3 py-2 rounded text-[20px] font-semibold text-white" onClick={nextBanner}>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default Banner;
