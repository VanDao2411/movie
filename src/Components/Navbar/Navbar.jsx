/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react'
import logo_phim from '../../assets/logo_phim.png'
import { useNavigate } from 'react-router-dom';
import search from '../../assets/search.png'
import arrow_drop from '../../assets/arrow_drop.png'
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function Navbar({ handleScrollToSection }) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${query}`);
        }
    };
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


    return (
        <div className="flex w-full h-20 bg-black-3 font-semibold shadow-2xl">
            <div className="relative flex ml-10">
                <img className='w-21 h-21 object-cover cursor-pointer' src={logo_phim} />
                <p className='flex items-center justify-between text-[20px] text-white poppins-font cursor-pointer '>HOT PHIM</p>
                <ul className='flex gap-8 ml-20 items-center justify-betwzeen cursor-pointer text-white'>
                    <Link to="/" className='hover:text-yellow-500 poppins-font'>Trang Chủ</Link>
                    <li className='hover:text-yellow-500 poppins-font'>Phim Chiếu Rạp</li>
                    <li className='hover:text-yellow-500 poppins-font'>
                        <a href="#">Phim Lẻ</a>
                    </li>
                    <Link to='/' className='hover:text-yellow-500 poppins-font'>Phim Bộ</Link>
                    <li className='hover:text-yellow-500 poppins-font'>Lồng Tiếng-TM</li>
                    <div className="inline-block relative">
                        <li className='hover:text-yellow-500 flex items-center justify-center'>
                            <a href="#">Thể Loại</a>
                            <img onClick={toggleDropdown} className='w-5 h-5 ' src={arrow_drop} alt="" />
                        </li>
                        {dropdownOpen && (
                            <ul className="absolute left-0 top-full mt-2  bg-white border border-gray-200 rounded-md shadow-lg">
                                <div className='grid grid-cols-3 gap-4'>
                                    <li className="hover:bg-gray-100 p-2">
                                        <a className='block w-full' href="#">Gia Đình</a>
                                    </li>
                                </div>
                            </ul>
                        )}
                    </div>
                    <li className='hover:text-yellow-500'>Quốc Gia</li>
                    <li className='hover:text-yellow-500'>TV Show</li>
                </ul>
            </div>
            <div className="flex gap-6 items-center ml-20 ">
                <input id="search-input" value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)} type="text" placeholder="Search..." className=" p-2 pl-10 w-54 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300" />
                <button className='p-2 bg-slate-500 rounded-2xl' type="button"  onClick={handleSearch}>
                    <img className='w-8 h-8' src={search} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Navbar