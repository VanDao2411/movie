
const favoriteActresses = [
    {
        id: "01",
        name: "Triệu Lộ Tư",
        thumb_url:"https://media.viez.vn/prod/2022/9/7/small_1662529152520_1b1cafeaf5.jpeg",
        thumb_poster:"https://i.pinimg.com/474x/a5/63/1a/a5631a34198a6f624d264254adbf6f94.jpg",
        country: "China",
        age: 26,
        evaluate:"9.8",
        view:"594tr",
        description: " Triệu Lộ Tư sinh ngày 9 tháng 11 năm 1998 tại Thành Đô, Tứ Xuyên, Trung Quốc là nữ diễn viên nổi tiếng Trung Quốc, tốt nghiệp Đại học Minh Đạo tại Đài Loan. Cô được biết đến nhiều hơn với vai diễn Trần Thiên Thiên trong phim Trần Thiên Thiên, ngày ấy bây giờ, Trình Thiếu Thương trong phim Tinh hán xán lạn và Tang Trĩ trong dự án ngôn tình chuyển thể Vụng trộm không thể giấu. Mới nhất cô tham gia bộ phim Thần Ẩn với vai diễn A Âm/Phượng Ẩn."
    },
    {
        id: "02",
        name: "Cúc Tịnh Y",
        thumb_url:"https://i.pinimg.com/564x/16/33/b3/1633b3963b5c57a712c72ec09747be05.jpg",
        thumb_poster:"https://i.pinimg.com/236x/b0/64/73/b06473c478797264ef455fba36a8d2b7.jpg",
        country: "China",
        age: 29,
        evaluate:"9.5",
        view:"504tr",
        description: "Cúc Tịnh Y sinh 18 tháng 6 năm 1994 là một nữ ca sĩ, diễn viên và vũ công người Trung Quốc.Cúc Tịnh Y là cựu center (vị trí trung tâm) của nhóm SNH48 và hiện đang theo đuổi sự nghiệp solo. Năm 2019, Tịnh Y lần đầu tiên lọt vào Danh sách 100 ngôi sao nổi tiếng Trung Quốc theo Forbes với thứ hạng 94[1], và năm 2020 là thứ hạng 84[2]. Năm 2021 với thứ hạng là 15.Trong vai trò là diễn viên, cô được biết đến với những vai diễn trong các bộ phim cổ trang,hiện đại tình cảm như Vân Tịch Truyện (2018), đặc biệt tác phẩm Vân Tịch Truyện đã làm nên tên tuổi của cô, giúp sự nghiệp của cô được thăng tiến."
    },
    {
        id: "03",
        name: "Địch Lệ Nhiệt Ba",
        thumb_url:"https://vcdn1-giaitri.vnecdn.net/2022/10/30/nhiet-ba-1-jpeg.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=eXHNbLA6HJoIl8zT0OhOmQ",
        thumb_poster:"https://ss-images.saostar.vn/pc/1666370635062/saostar-6dcfpy3zx9u5w1rr.gif",
        country: "China",
        age: 31,
        evaluate:"9.3",
        view:"494tr",
        description: "Nhiệt Ba sinh ngày 3 tháng 6 năm 1992 tại thành phố Ô Lỗ Mộc Tề, Tân Cương, Trung Quốc. Cha cô là Dilmurat Abdullah, là ca sĩ đơn ca, được trao tặng danh hiệu Diễn viên hạng nhất quốc gia thuộc đoàn Ca múa nhạc Tân Cương. Chịu ảnh hưởng lớn từ cha, Nhiệt Ba từ nhỏ đã tỏ ra hứng thú với các bộ môn nghệ thuật, cô cũng chủ động theo học đàn piano, violin, vũ đạo, các loại hình nghệ thuật. ",
    },
    {
        id: "04",
        name: "Chương Nhược Nam",
        thumb_url:"https://vcdn-ngoisao.vnecdn.net/2023/06/29/top-1688011497-5112-1688011799-2272-5798-1688024307_m_900x540.jpg",
        thumb_poster:"https://newsmd2fr.keeng.vn/tiin/archive/imageslead/2024/01/17/qrriafgf6k32i0aoletdox84oobl9llr.jpg",
        country: "China",
        age: 27,
        evaluate:"9.0",
        view:"484tr",
        description: "Chương Nhược Nam sinh ra ở thành phố Ôn Châu tỉnh Chiết Giang, vì ba mẹ có công việc kinh doanh ở Thạch Gia Trang, nên cô đã trải qua thời gian tiểu học ở đây. Năm 2015, Chương Nhược Nam vào Đại học Hàng Châu. Vì thích chụp ảnh, nên cô thường đăng ảnh của mình lên Weibo. Một người bạn cùng lớp đề cử cô tham gia cuộc thi nữ sinh của trường, cô ấy đã đăng một bức ảnh của mình lên Weibo, cuối cùng cô lọt vào danh sách top 30 của trường. Sau đó, một doanh nhân đã tìm đến cô và mời cô làm người mẫu."
    },
    {
        id: "05",
        name: "Cảnh Điềm",
        thumb_url:"https://35express.org/wp-content/uploads/2021/09/doi-tu-lum-xum-thi-phi-cua-canh-diem-35express.jpg.webp",
        thumb_poster:"https://i.pinimg.com/564x/6c/6a/51/6c6a51f2d7dae29f113eda513274fef3.jpg",
        country: "China",
        age: 35,
        evaluate:"8.9",
        view:"479tr",
        description: "Cảnh Điềm sinh năm 1988 ở Tây An, Thiểm Tây. Từ nhỏ vì sức khỏe yếu nên gia đình quyết định cho cô đi học khiêu vũ ở Đoàn nghệ thuật Tiểu Thiên Nga tỉnh Thiểm Tây. Năm 2000, Cảnh Điềm theo học tại Học viện vũ đạo Bắc Kinh, ngành múa dân gian Trung Quốc Tháng 12 năm 2006, Cảnh Điềm cho ra album nhạc đầu tay có tựa đề. Nhờ đó mà cô được khán giả biết đến."
    },
    {
        id: "06",
        name: "Dương Mịch",
        thumb_url:"https://media-cdn-v2.laodong.vn/storage/newsportal/2022/7/10/1066472/FD421D7E-39B5-4E55-A.jpeg?w=800&h=496&crop=auto&scale=both",
        thumb_poster:"https://i.pinimg.com/564x/10/4a/dc/104adcf540716f572f917fbc70714de7.jpg",
        country: "China",
        evaluate:"8.6",
        view:"450tr",
        age: 37,
        description: "Dương Mịch sinh ngày 12 tháng 9 năm 1986) là một nữ diễn viên, người mẫu, ca sĩ và nhà sản xuất phim người Trung Quốc. Năm 2011, cô tham gia các phim truyền hình ăn khách như Cung toả tâm ngọc và phim điện ảnh Cô đảo kinh hoàng và nhanh chóng nổi tiếng, lấn sân sang nhiều lĩnh vực đầu tư và sản xuất phim truyền hình.Dương Mịch sinh ra trong gia đình cơ bản tại khu Tuyên Vũ (宣武区) nay được hợp nhất với quận Tây Thành, Bắc Kinh, Trung Quốc.Sự nghiệp diễn xuất của cô bắt đầu từ đó. Mịch trở thành diễn viên nhí trong phim cổ trang Võ Trạng nguyên Tô Khất Nhi (武状元苏乞儿), phim truyền hình Hầu Oa (猴娃) và một số phim khác sau đó."
    },
    {
        id: "07",
        name: "Vương Sở Nhiên",
        thumb_url:"https://cdn.24h.com.vn/upload/1-2023/images/2023-01-17/vuong-4-1673959456-684-width740height555_schema_article.jpeg",
        thumb_poster:"https://i.imgur.com/1pB1B4c.jpg",
        country: "China",
        age: 27,
        evaluate:"8.5",
        view:"438tr",
        description: "Vương Sở Nhiên lớn lên ở Truy Bác, Sơn Đông, mẹ cô là người Sơn Đông và ba cô là người Thượng Hải. Cô từ nhỏ đã yêu thích nghệ thuật, học khiêu vũ, đệm đàn piano, ukulele và nhiều loại nhạc cụ khác. Năm 2014, Vương Sở Nhiên được nhận vào khoa Kinh kịch của Học viện Hý kịch Thượng Hải. Năm 2016, khi còn đang học cấp ba, cô đã tham gia vào vở kịch nói Xa Xôi Đích Gia Hương, đạt được hạng nhất cuộc thi Văn Minh Phong Thái lần thứ 12 và giải thưởng cá nhân xuất sắc nhất tại Liên hoan kịch dành cho học sinh trung học Thượng Hải lần thứ tư.[1] Cùng năm, cô đã giành được học bổng hạng nhất Thượng Hải."
    },
    {
        id: "08",
        name: "Lưu Diệc Phi",
        thumb_url:"https://ss-images.saostar.vn/w800/2023/11/18/pc/1700298700268/n6utbg3wuq1-qv89bcpf3r2-44t4uifb313.jpg",
        thumb_poster:"https://static1.dienanh.net/upload/202110/9fb65079-8457-41aa-b232-8d9527c9c309.jpg",
        country: "China",
        age: 36,
        evaluate:"8.5",
        view:"434tr",
        description: "Lưu Diệc Phi sinh ngày 25 tháng 8 năm 1987), là một nữ diễn viên kiêm ca sĩ người Mỹ gốc Hoa. Cô đã nhiều lần xuất hiện trong danh sách 100 ngôi sao nổi tiếng nhất Trung Quốc theo Forbes và được vinh danh là một trong Tứ Tiểu Hoa Đán của Trung Quốc vào năm 2009.[1] Cô được biết đến rộng rãi với biệt danh thần tiên tỷ tỷ ở Trung Quốc."
    },
    {
        id: "09",
        name: "Triệu Lệ Dĩnh",
        thumb_url:"https://media.techz.vn/media2019/upload2019/2022/02/25/Trieu-le-dinh-bi-dang-dan-boc-phot-he-lo-con-nguoi-that-cua-nu-dien-vien-gay-ngo-ngang-3_25022022151529.jpg",
        thumb_poster:"https://i.pinimg.com/236x/ee/6e/0a/ee6e0aaab043d0ec724ac1320633b436.jpg",
        country: "China",
        age: 36,
        evaluate:"8.3",
        view:"414tr",
        description: "Triệu Lệ Dĩnh sinh ngày 16 tháng 10 năm 1987) là nữ diễn viên người Trung Quốc.Triệu Lệ Dĩnh tham gia Trò chơi Ngôi sao tìm kiếm của Yahoo và trở thành người chiến thắng cuối cùng. Sau đó, cô ký hợp đồng với Hoa Nghị Huynh Đệ như một tài năng mới. Năm 2007, Dĩnh lần đầu tiên tham gia diễn xuất trong bộ phim truyền hình gia đình Đám cưới vàng của đạo diễn Trịnh Hiểu Long."
    },
    {
        id: "10",
        name: "Châu Dã",
        thumb_url:"https://image.tienphong.vn/600x315/Uploaded/2024/cajwqdhnw/2023_05_03/342567154-641186527833111-354269-41.jpeg",
        thumb_poster:"https://afamilycdn.com/150157425591193600/2024/2/1/16-1318-1706802605577-17068026056561008978193.jpg",
        country: "China",
        age: 26,
        evaluate:"8.0",
        view:"404tr",
        description: "Châu Dã sinh ngày 20 tháng 5 năm 1998) là một nữ diễn viên người Trung Quốc, tốt nghiệp Học viện Điện ảnh Bắc Kinh, trực thuộc công ty giải trí Truyền thông Hoà Tụng. Cô nổi tiếng với vai Ngụy Lai trong Em của thời niên thiếu.Châu Dã cấp hai theo học tại trường Hoa La Canh ở thành phố Huệ Châu, tỉnh Quảng Đông. Năm đầu cấp 3 thi vào lớp IELTS của Khoa Quốc tế, năm thứ 2 chọn ngành nghệ thuật tự do. Năm 2016, khi còn đang học cấp ba, Châu Dã quyết định chuyển sang học ở ban truyền thông, tạm thời quyết định thi nghệ thuật, cuối cùng cô đã trúng tuyển vào chuyên ngành diễn xuất của Học viện Điện ảnh Bắc Kinh, với thứ hạng 36 trên cả nước, trở thành sinh viên đầu tiên của Huệ Châu được nhận vào khoa diễn xuất của Học viện Điện ảnh Bắc Kinh."
    }
];

export default favoriteActresses;
