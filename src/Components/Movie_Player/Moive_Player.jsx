// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Highlight from '../Highlight/Highlight';

function Moive_Player() {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);
    const [episodes, setEpisodes] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://apii.online/apii/phim/${slug}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (data.status) {
                    setMovie(data.movie);
                    setEpisodes(data.episodes); // Lấy danh sách tất cả các tập phim
                    // Thiết lập iframe hiển thị tập phim đầu tiên ngay khi component được load
                    if (data.episodes.length > 0 && data.episodes[0].server_data.length > 0) {
                        const firstEpisode = data.episodes[0].server_data[0];
                        updateIframeSrc(firstEpisode.link_embed);
                    }
                } else {
                    setError('Movie not found or API error');
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchMovie();
    }, [slug]);

    const updateIframeSrc = (src) => {
        const iframe = document.getElementById('movieIframe');
        if (iframe) {
            iframe.src = src;
        } else {
            console.error('Movie iframe element not found!');
        }
    };

    const handleEpisodeClick = (episode) => {
        // Xử lý khi người dùng nhấp vào một tập phim
        console.log('Clicked on episode:', episode);
        // Cập nhật iframe để hiển thị video của tập phim được chọn
        updateIframeSrc(episode.link_embed);
        // Các hành động khác cần thực hiện khi chọn tập phim, ví dụ như scroll lên đầu trang để người dùng có thể thấy video ngay.
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
                        src={movie.link_embed} // Đây là ví dụ, bạn cần thay đổi src để hiển thị video phim
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={movie.name}
                    ></iframe>
                </div>
                <div className="bg-black-1 ml-10 py-1 w-full rounded mt-3 ">
                    <h3 className='text-white font-semibold text-[18px] pl-6 mt-2'>DANH SÁCH TẬP</h3>
                    <div className=" w-full p-3">
                        {episodes.map((season, seasonIndex) => (
                            <div key={seasonIndex} className='flex flex-wrap gap-2    '>
                                {season.server_data.map((episode, index) => (
                                    <Link
                                        key={index}
                                        to={`/movie/${slug}/${episode.slug}`}
                                        className='w-[35px] h-[35px] mt-2 pt-1 bg-slate-500 rounded-lg cursor-pointer hover:bg-slate-400 transition duration-200 text-white text-center '
                                        onClick={() => handleEpisodeClick(episode)}
                                    >
                                        {episode.name}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="bg-black-1 rounded w-full py-5 ml-10 mt-3">
                      <h3> {episodes.name} </h3>
                </div> */}
                <div className="bg-black-1 shadow-2xl w-full h-[500px] m-10 rounded">
                    <h2  className='text-white text-[20px] font-poppins font-semibold ml-3 pt-2'> BÌNH LUẬN </h2>
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
                        <button className='bg-pink py-3 px-10 rounded-2xl  ml-[900px] font-poppins text-[15px] text-black'>
                            Gửi
                        </button>
                        <hr className='m-3' />
                    </div>
                </div>
            </div>
            <div className="bg-black-1 w-[30%] m-5 rounded ">
                <Highlight/>
            </div>
        </div>
    );
}

export default Moive_Player;

