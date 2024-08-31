// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'
import play_arrow from '../../assets/play_arrow.png';
import chevron_left from '../../assets/chevron_left.png';
import chevron_right from '../../assets/chevron_right.png'
import { Link } from 'react-router-dom';
function TitleCards() {
    // const [movies, setMovies] = useState([]);
    const [page, setPage] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const scrollContainer = useRef(null);

    useEffect(() => {
        fetch(`https://apii.online/apii/danh-sach?year=2024&type=series&status=ongoing&country=trung-quoc&category=tinh-cam%2C%20co-trang%2Chanh-dong%2Cvo-thuat%2Choc-duong%2Clang-man%2Ckhoa-hoc-vien-tuong&page=1`)
            .then(response => response.json())
            .then(data => setPage(data.items));
    }, [page]);

    const handleCardHover = (index) => {
        setHoveredCard(index)
    }

    const scrollLeft = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollLeft -= 1000;
        }
    }

    const scrollRight = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += 1000;
        }
    }

    return (
        <div className=" bg-black-1 mt-0">
            <h2 className=" ml-10 pt-5 text-[28px] text-white font-semibold">Phim Đề Cử</h2>
            <div className="flex p-10 gap-5 overflow-x-auto scrollbar-hide " ref={scrollContainer}>
                {page.map((card, index) => {
                    return <Link to={`/movies/${card.slug}`} key={index} onMouseEnter={() => handleCardHover(index)} onMouseLeave={() => handleCardHover(null)}> 
                        <div className='relative w-[250px] h-[150px] bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg flex-shrink-0'>
                            <img className={`w-full h-full rounded object-cover cursor-pointer ${hoveredCard === index ? 'transform transition-transform duration-500 ease-in-out scale-125' : ''}`} src={`https://apii.online/image/` + card.poster_url} alt="" />
        
                            {hoveredCard === index && (
                                <div className="absolute inset-0 flex items-center justify-center ">
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
                <button className="absolute left-2 mt-10 bg-orange-500 px-1 py-1 rounded-full" onClick={scrollLeft}>
                    <img className='w-[40px] h-[40px] pr-1 flex items-center justify-center' src={chevron_left} alt="" />
                </button>
                <button className="absolute right-2 mt-10 bg-orange-500 px-1 py-1 rounded-full" onClick={scrollRight}>
                    <img className='w-[40px] h-[40px] pl-1 flex items-center justify-center' src={chevron_right} alt="" />
                </button>
            </div>

        </div>
    )
}

export default TitleCards