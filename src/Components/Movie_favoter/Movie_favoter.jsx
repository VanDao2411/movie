    // eslint-disable-next-line no-unused-vars
    import React, {useState} from 'react'
    import Movies_wacthes from '../../Data/Movie-watches/Movie-watches';
    import play_arrow from '../../assets/play_arrow.png'
    import { Link } from 'react-router-dom';

    function Movie_favoter() {
        const [hoveredCard, setHoveredCard] = useState(null);
        const [limit, setLimit] = useState(16);
        const moviesFavoter = Movies_wacthes.map(({ id,slug, name,thumb_url, episode_current, view, poster_url }) => ({ id,slug, name, thumb_url,episode_current ,view, poster_url }));
        
        const handleCardHover = (index) => {
            setHoveredCard(index)
        }


        return (
            <div className='w-full'>
                <h2 className=' ml-10 pt-5 text-[28px] text-white font-semibold'>Phim Được Ưa Thích</h2>
                <div className="grid grid-cols-4 p-5 gap-5 ml-5">
                    {moviesFavoter.slice(0, limit).map((card, index) => {
                        return <Link to={`/movie-favorite/${card.id}/${card.slug}`} className="relative w-[250px] h-[150px] bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg flex-shrink-0" key={index} onMouseEnter={() => handleCardHover(index)} onMouseLeave={() => handleCardHover(null)}>
                            <img className={`w-full h-full rounded object-cover cursor-pointer ${hoveredCard === index ? 'transform transition-transform duration-500 ease-in-out scale-125' : ''}`} src={card.poster_url} alt="" />
                            {hoveredCard === index && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="bg-orange-500 opacity-70 px-1 py-1 rounded-full">
                                        <img className='w-[45px] h-[45px] flex items-center justify-center' src={play_arrow} alt="" />
                                    </button>
                                </div>
                            )}
                            <div className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-1 rounded">{card.episode_current} <span>|</span> VietSub</div>
                            <div className="absolute bottom-0 left-0 w-full bg-black opacity-50 p-2">
                                <h3 className="text-base font-semibold truncate">{card.name}</h3>
                            </div>
                        </Link>
                    })}
                </div>
                 <div className="flex gap-1 items-center justify-center pb-3">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => setLimit(prevLimit => prevLimit + 16)}
                    >
                        Xem thêm
                    </button>
                     <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => setLimit(prevLimit => prevLimit - 16)}
                    >
                        Thu gọn
                    </button>
                </div>
            </div>
        )
    }

    export default Movie_favoter