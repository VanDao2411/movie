// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Highlight from '../../../Components/Highlight/Highlight';
import Movies_watches from '../../../Data/Movie-watches/Movie-watches';

function MoviePlayer() {
    const { id, slug } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const foundMovie = Movies_watches.find(movie => movie.id === parseInt(id) && movie.slug === slug);
        if (foundMovie) {
            setMovie(foundMovie);
            setEpisodes(foundMovie.episodes || []);
        } else {
            setError('Phim không tồn tại');
        }
    }, [id, slug]);

    useEffect(() => {
        if (episodes.length > 0) {
            updateIframeSrc(episodes[0].link_embed);
        }
    }, [episodes]);

    const updateIframeSrc = (src) => {
        const iframe = document.getElementById('movieIframe');
        if (iframe) {
            iframe.src = src;
        } else {
            console.error('Không tìm thấy phần tử iframe!');
        }
    };

    const handleEpisodeClick = (episode) => {
        console.log('Clicked on episode:', episode);
        updateIframeSrc(episode.link_embed);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-black w-full h-[200vh] flex gap-0 justify-between">
            <div className="w-[65%]">
                <div className=" w-full p-3 ml-10 mt-5 inline-block bg-black-1 rounded">
                    <iframe
                        id="movieIframe"
                        width="100%"
                        height="630"
                        src=""
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={movie.name}
                    ></iframe>
                </div>
                <div className="bg-black-1 ml-10 py-1 w-full rounded mt-3 ">
                    <h3 className='text-white font-semibold text-[18px] pl-6 mt-2'>DANH SÁCH TẬP</h3>
                    <div className=" w-full p-3 flex flex-wrap gap-2">
                        {episodes.map((episode, index) => (
                            <div
                                key={index}
                                className='w-[35px] h-[35px] pt-1 bg-slate-500 rounded-lg cursor-pointer hover:bg-slate-400 transition duration-200 text-white text-center'
                                onClick={() => handleEpisodeClick(episode)}
                            >
                                {episode.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-black-1 shadow-2xl w-full h-[500px] m-10 rounded">
                    <h2 className='text-white text-[20px] font-poppins font-semibold ml-3 pt-2'> BÌNH LUẬN </h2>
                    <hr />
                    <div className="bg-white w-[98%] h-[88%] m-3 rounded">
                        <ul className="flex gap-6 justify-between p-3">
                            <li>0 bình luận</li>
                            <li> Sắp xếp theo: Mới nhất</li>
                        </ul>
                        <hr className='m-3' />
                        <div className="flex gap-3 m-3 justify-between items-center pt-3">
                            <img className='w-[80px] h-[80px] bg-cover rounded-full' src="https://i.pinimg.com/564x/cb/f9/9f/cbf99f208ffec713a663ef886cdbe092.jpg" alt="" />
                            <input type="text" placeholder='Viết bình luận ...' className="w-full h-12 p-3 border border-gray-300 rounded-md resize-both overflow-hidden" />
                        </div>
                        <button className='bg-pink py-3 px-10 rounded-2xl ml-[900px] font-poppins text-[15px] text-black'>
                            Gửi
                        </button>
                        <hr className='m-3' />
                    </div>
                </div>
            </div>
            <div className="bg-black-1 w-[30%] m-5 rounded">
                <Highlight />
            </div>
        </div>
    );
}

export default MoviePlayer;


