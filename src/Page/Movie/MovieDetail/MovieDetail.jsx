// // eslint-disable-next-line no-unused-vars
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Movies_wacthes from '../../../Data/Movie-watches/Movie-watches'

// function MovieDetail() {
//     const { id, slug } = useParams();
//     const movie = Movies_wacthes.find(movie => movie.id === parseInt(id) && movie.slug === slug);

//     if (!movie) {
//         return <div>Phim không tồn tại</div>;
//     }

//     return (
//         <div>
//             <h1>{movie.name} ({movie.year})</h1>
//             <img src={movie.poster_url} alt={movie.name} />
//             <p>{movie.content}</p>
//         </div>
//     );
// }

// export default MovieDetail;

// import React from 'react'
// import star from '../../assets/star.png';
// import time from '../../assets/time.png';
// import calendar from '../../assets/calendar.png';
// function Banner() {

//     return (
//         <div className=' relative h-[600px] p-5 rounded'>
//             <img className=' w-full h-[500px] m-3 rounded' src="https://bazaarvietnam.vn/wp-content/uploads/2023/11/harper-bazaar-review-phim-lac-du-nguyen-wonderland-of-love-9-e1699539472658.jpeg" alt="" />
//             <div className="bg-black opacity-65 absolute right-2 top-8 w-[600px] h-[500px] rounded ">
//                 <h1 className=' absolute ml-[60px] mt-10 p-10 text-[50px] flex items-center justify-center text-white font-semibold '>Lạc Du Nguyên</h1>
//                 <div className="flex">
//                     <img className='w-[25px] h-[25px] absolute mt-[155px] left-[100px]  ' src={star} alt="" />
//                     <h3 className='text-red-500  font-semibold text-[23px] absolute left-[130px] mt-[150px] '>8.5</h3>
//                     <img className='w-[25px] h-[25px] absolute mt-[155px] left-[180px]' src={time} alt="" />
//                     <h4 className=' text-white font-semibold text-[19px] absolute left-[210px] mt-[152px] '>Trọn bộ(45/45) VietSub</h4>
//                     <img className='w-[25px] h-[25px] absolute mt-[155px] left-[450px]' src={calendar} alt="" />
//                     <h5 className='text-white font-semibold text-[18px] absolute left-[480px] mt-[154px] '>2023</h5>
//                 </div>
//                 <div className="absolute top-[190px] left-[100px] bg-red-600 text-xs px-1 py-1 rounded ">HD | VIETSUB + LỒNG TIẾNG</div>
//                 <p className='text-white font-semibold text-[18px] absolute left-[100px] mt-[220px] line-clamp-3 '>Lạc Du Nguyên - Wonderland Of Love (2022)là một bộ phim tình cảm đầy màu sắc và lãng mạn, hứa hẹn mang đến cho khán giả những cung bậc cảm xúc đáng nhớ. Với sự tham gia của dàn diễn viên tài năng và đẹp mắt, bộ phim tái hiện một thế giới thần tiên đầy mơ mộng và kỳ diệu. Câu chuyện xoay quanh cuộc gặp gỡ định mệnh giữa hai người trẻ tuổi,họ cùng nhau khám phá một thế giới mới, nơi tình yêu và sự kỳ diệu tồn tại. Với cốt truyện sâu sắc và những tình huống hài hước, bộ phim hứa hẹn sẽ làm say đắm lòng người và để lại dấu ấn sâu sắc. Wonderland Of Love (2022) là một tác phẩm đáng xem, mang đến cho khán giả những giây phút thư giãn và lắng đọng.</p>
//                 <p className='text-white font-semibold text-[18px] absolute left-[100px] mt-[310px]'>Thể loại: Cổ Trang <br />
//                     Đạo Diễn: Updating... <br />
//                     Diễn Viên: Hứa Khải, Cảnh Điềm, Cao Hàn, Triệu Gia Mẫn, Trịnh Hợp Huệ Tử
//                 </p>
//                 <button className='absolute top-[450px] left-[100px] bg-red-600 px-3 py-2 rounded text-[20px] font-semibold text-white'>
//                     Xem Phim
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Banner