// eslint-disable-next-line no-unused-vars
import React from 'react'
import Movie_bo from '../../Components/Movie_bo/Movie_bo'
import logo_phim from '../../assets/logo_phim.png'
function Footer() {
  return (
    <footer className="bg-black-3 text-gray-300 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex gap-2'>
                    <img className='w-20 h-20 object-cover cursor-pointer' src={logo_phim} alt="" />
                    <div className="">
                        <h3 className="text-lg font-semibold">Công ty Công Nghệ Trí Nhất Espost</h3>
                        <p className="text-sm">Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
                        <p className="text-sm">Email: info@abcphim.com</p>
                        <p className="text-sm">Điện thoại: 0123 456 789</p>
                    </div>
                </div>
                <div>
                    <ul className="mt-2 grid grid-cols-2 gap-3 mr-5">
                        <li className="mb-1"><a href="/">Trang chủ</a></li>
                        <li className="mb-1"><a href="/phim-le">Phim lẻ</a></li>
                        <li className="mb-1"><a href={<Movie_bo/>}>Phim bộ</a></li>
                        <li className="mb-1"><a href="/the-loai">Thể loại</a></li>
                        <li className="mb-1"><a href="/the-loai">Phim chiếu rạp</a></li>
                        <li className="mb-1"><a href="/the-loai">Hoạt Hình</a></li>

                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Kết nối với chúng tôi</h3>
                    <ul className="mt-2 flex gap-3">
                        <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram-square"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-4 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Công ty Công Nghệ Trí Nhất Espost. All rights reserved.</p>
            </div>
        </footer>
  )
}

export default Footer