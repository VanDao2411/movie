
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from 'react'
import favoriteActresses from '../../Data/Performer_women/Performer_women';
function Performer() {

    const scrollContainer = useRef(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const namesAndAges = favoriteActresses.map(({ id, name, age, thumb_url, description, country,evaluate, view, thumb_poster }) => ({ id, name, age, thumb_url, description, country, evaluate, view, thumb_poster }));

    const handleCardHover = (index) => {
        setHoveredCard(index)
    }
    return (
        <div className=" w-full inset-0 cursor-pointer">
            <h2 className='ml-10 mt-3 text-[28px] text-white font-semibold'>Top Nữ Diễn Viên </h2>
            <div className="pt-5 pl-10 overflow-y-auto scrollbar-hide h-full" ref={scrollContainer}>
                {namesAndAges.map((card, index) => {
                    return <div className='relative' key={index} onMouseEnter={() => handleCardHover(index)} onMouseLeave={() => handleCardHover(null)}>
                        <div className="relative mb-5 bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg flex-shrink-0 w-[350px] h-[200px]">
                            <img className={`w-full h-full rounded object-cover cursor-pointer ${hoveredCard === index ? 'transform transition-transform duration-500 ease-in-out scale-125' : ''}`} src={card.thumb_url} alt="" />

                            <div className="absolute top-0 left-2 bg-red-600 text-[10px] px-4 py-2.5 rounded-b-lg">{card.id}</div>
                            
                            <div className="absolute bottom-0 left-0 w-full bg-black opacity-70 p-2 flex gap-2">
                                <h3 className="text-base font-semibold truncate">{card.name}</h3>
                                <div className="absolute top-0 right-2 text-[10px] px-4 py-2.5 rounded-b-lg flex gap-2 items-center justify-center">
                                    <i className="fa fa-star text-yellow-400 text-[15px]" aria-hidden="true"></i>
                                    <h3 className='text-white  font-medium text-[15px]'> {card.evaluate} </h3>
                                    <i className="fa-solid fa-heart text-red-500 text-[18px] ml-2 mt-1"></i>
                                </div>
                            </div>
                        </div>
                        {hoveredCard === index && (
                            <div className="absolute inset-0 z-10 bg-black-2 shadow-2xl opacity-80 w-[300px] h-[240px] rounded-lg left-20 top-10 mt-10 ml-10">
                                <div className="flex gap-5">
                                    <img className='w-20 h-20  object-cover rounded-full ml-4 mt-4 shadow-xl' src={card.thumb_poster} alt="" />
                                    <ul className='ml-2 mt-2'>
                                        <li className='text-white text-[18px] font-medium'>{card.name} </li>
                                        <li className='text-white text-[18px] font-medium mt-2 mb-2'> Tuổi: {card.age} </li>
                                        <li className='text-white text-[18px] font-medium'> Quốc Gia:  {card.country} </li>
                                    </ul>
                                </div>
                                <p className='text-white text-[13px] font-medium m-2 line-clamp-4'> {card.description} </p>
                                <button className=' bg-red-600 py-1 px-2 rounded text-[15px] font-semibold text-white absolute right-0 mr-4'>
                                    Xem Thêm
                                </button>
                            </div>
                        )}
                    </div>
                    
                })}

            </div>
        </div>
    )
}

export default Performer
