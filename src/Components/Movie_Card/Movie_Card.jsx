// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Highlight from '../Highlight/Highlight';
import Movie_favoter from '../Movie_favoter/Movie_favoter';
import Movie_cartoon from '../Movie_cartoon/Movie_cartoon';
import Performer from '../Movie_trainler/Performer';

function Movie_Card() {

    const { slug } = useParams();
    const [movie, setMovie] = useState([])
    const [episodes, setEpisodes] = useState([]);
    const [setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://apii.online/apii/phim/${slug}`);
                // Assuming your API endpoint is at /api/movies/:slug
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (data.status) {
                    setMovie(data.movie);
                    setEpisodes(data.episodes[0].server_data); // Assuming you want the first server's episodes
                } else {
                    setError('Movie not found or API error');
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchMovie();
    }, [slug]);

    return (
        <div className="bg-black-1 relative flex gap-3 w-full">
            <div className="w-full bg-black-1 h-full">
                <div className="relative w-[92%] h-[500px]">
                    <img className='rounded m-[60px] w-full h-full overflow-hidden object-cover' src={movie.poster_url} alt="" />
                    <div className="bg-black-1 opacity-80 absolute left-10 top-0 w-full h-full ml-5 ">

                        <div className="absolute flex gap-5 p-5 mt-[50px]">
                            <img className='w-[250px] h-[380px] rounded ml-[30px] relative shadow-2xl' src={movie.thumb_url} alt="" />
                            <Link to={`/movie/${movie.slug}/${episodes.slug}`} className='absolute top-[345px] left-[110px] bg-red-600 px-5 py-2 rounded text-[20px] font-semibold text-white'>
                                Xem Phim
                            </Link>
                            <div className="">
                                <h3 className='text-green-500 font-semibold text-[30px] '> {movie.name} ({movie.year})</h3>
                                <h4 className='text-white font-semibold text-[20px] ' >  {movie.origin_name} ({movie.year}) </h4>
                                <h3 className='text-yellow-500 font-semibold text-[25px] pt-10 mt-5 '> {movie.name} ({movie.year})</h3>
                                <div className='font-semibold text-white text-[15px] line-clamp-5 ' dangerouslySetInnerHTML={{ __html: movie.content }} />
                                <h1 className=' text-white font-semibold text-[18px] pt-10 mt-5 '> Time: {movie.time} </h1>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[92%] h-[400px] ml-[60px]">
                    <div className="flex gap-4 p-5">
                        <h3 className='text-green-500 font-semibold text-[18px] cursor-pointer '>Thông tin phim</h3>
                        <h3 className='text-white font-semibold text-[18px] cursor-pointer'>Diễn Viên</h3>
                        <h3 className='text-white font-semibold text-[18px] cursor-pointer'>Hình ảnh</h3>
                    </div>
                    <div className="flex gap-10 bg-slate-900 h-[300px] rounded">
                        <div className=" row-span-5">
                            <div className="flex gap-2 pt-5 pl-5">
                                <div className="w-[7px] h-[7px] bg-green-400 rounded-full mt-4"></div>
                                <h3 className='text-white font-semibold text-[15px] mt-2 ml-2 '>Tập mới: </h3>
                                <p className='text-white max-w-lg h-[40px] bg-slate-800 shadow-md rounded-lg text-center p-2 cursor-pointer'>{movie.episode_current}</p>
                            </div>
                            <div className="flex gap-2 pt-5 pl-5">
                                <div className="w-[7px] h-[7px] bg-green-400 rounded-full mt-4"></div>
                                <h3 className='text-white font-semibold text-[15px] mt-2 ml-2'>Trạng thái: {movie.episode_current} <span>/</span> {movie.episode_total} </h3>

                            </div>
                            <div className="flex gap-2 pt-5 pl-5">
                                <div className="w-[7px] h-[7px] bg-green-400 rounded-full mt-4"></div>
                                <h3 className='flex gap-3 text-white font-semibold text-[15px] mt-2 ml-2'>
                                    Thể loại:
                                    {movie.category && movie.category.length > 0 ? (
                                        movie.category.map((cat, index) => (
                                            <span key={cat.id} className='list-none'>
                                                {cat.name}{index < movie.category.length - 1 ? ', ' : ''}
                                            </span>
                                        ))
                                    ) : (
                                        <span>Không có thể loại</span> // hoặc bạn có thể thay bằng nội dung khác mà bạn muốn hiển thị khi không có thể loại
                                    )}
                                </h3>



                            </div>
                            <div className="flex gap-2 pt-5 pl-5">
                                <div className="w-[7px] h-[7px] bg-green-400 rounded-full mt-4"></div>
                                <h3 className=' text-white font-semibold text-[15px] mt-2 ml-2'>Đạo diễn: {movie.director}</h3>
                            </div>
                            <div className="flex gap-2 pt-5 pl-5">
                                <div className="w-[7px] h-[7px] bg-green-400 rounded-full mt-4"></div>
                                <h3 className='flex gap-2 text-white font-semibold text-[15px] mt-2 ml-2'>
                                    Quốc gia:
                                    {movie.country && movie.country.length > 0 ? (
                                        movie.country.map((cou, index) => (
                                            <span key={cou.id} className='list-none'>
                                                {cou.name}{index < movie.country.length - 1 ? ', ' : ''}
                                            </span>
                                        ))
                                    ) : (
                                        <span>Không có quốc gia</span> // hoặc nội dung bạn muốn hiển thị khi không có quốc gia
                                    )}
                                </h3>

                            </div>
                        </div>
                        <div className="rol-span-5 pl-10 ml-[30px]">
                            <div className="flex gap-2 pt-5 pl-5">
                                <div className="w-[7px] h-[7px] bg-green-400 rounded-full mt-4"></div>
                                <h3 className='text-white font-semibold text-[15px] mt-2 ml-2'>Thời lượng: {movie.time} </h3>

                            </div>
                            <div className="flex gap-2 pt-5 pl-5">
                                <div className="w-[7px] h-[7px] bg-green-400 rounded-full mt-4"></div>
                                <h3 className='flex gap-3 text-white font-semibold text-[15px] mt-2 ml-2'>Tổng số tập: {movie.episode_total} tập</h3>

                            </div>
                            <div className="flex gap-2 pt-5 pl-5">
                                <div className="w-[7px] h-[7px] bg-green-400 rounded-full mt-4"></div>
                                <h3 className=' text-white font-semibold text-[15px] mt-2 ml-2'>View: {movie.view}</h3>
                            </div>
                            <div className="flex gap-2 pt-5 pl-5">
                                <div className="w-[7px] h-[7px] bg-green-400 rounded-full mt-4"></div>
                                <h3 className=' flex gap-2 text-white font-semibold text-[15px] mt-2 ml-2'>Lên sóng: {movie.year}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-8">
                    <Movie_favoter />
                    <Movie_cartoon />
                </div>
            </div>
            <div className=" h-full mr-10 mt-10 ">
                <Highlight />
            <div className="">

                <Performer/>
            </div>
            </div>
        </div>

    )
}

export default Movie_Card