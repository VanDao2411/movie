// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from 'react'
import play_arrow from '../../assets/play_arrow.png'
import { Link, } from 'react-router-dom';


function Highlight() {

    const [hoveredCard, setHoveredCard] = useState(null);
    const scrollContainer = useRef(null);
    const [page, setPage] = useState([2]);
    useEffect(() => {
        fetch(`https://apii.online/nguonc/danh-sach?year=2024&type=series&status=ongoing&country=trung-quoc&category=co-trang%2Ctinh-cam%2Choc-duong%2C%20gia-tuong&page=1`)
            .then(response => response.json())
            .then(data => setPage(data.items));
    }, [page]);

    const handleCardHover = (index) => {
        setHoveredCard(index)
    }


    return (
        <div className=" w-full inset-0">
            <h2 className='ml-10 mt-3 text-[28px] text-white font-semibold'>Phim Hot</h2>
            <div className="pt-5 pl-10 overflow-y-auto scrollbar-hide h-[510px]" ref={scrollContainer}>
                {page.map((card, index) => {
                    return <Link to={`/movies/${card.slug}`} key={index} onMouseEnter={() => handleCardHover(index)} onMouseLeave={() => handleCardHover(null)}>
                        <div className="relative mb-5 bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg flex-shrink-0 w-[350px] h-[200px]">
                            <img className={`w-[full] h-[full] rounded object-cover cursor-pointer ${hoveredCard === index ? 'transform transition-transform duration-500 ease-in-out scale-125' : ''}`} src={`https://apii.online/image/` + card.poster_url} alt="" />
                            {hoveredCard === index && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="bg-orange-500 opacity-70 px-1 py-1 rounded-full">
                                        <img className='w-[45px] h-[45px] flex items-center justify-center' src={play_arrow} alt="" />
                                    </button>
                                </div>
                            )}
                            <div className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-1 rounded">{card.episode_current} <span>|</span> {card.lang}</div>
                            <div className="absolute bottom-0 left-0 w-full bg-black opacity-50 p-2">
                                <h3 className="text-base font-semibold truncate">{card.name}</h3>
                            </div>
                        </div>
                    </Link>
                })}
        
            </div>
        </div>
    )
}

export default Highlight