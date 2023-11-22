import { Pagination } from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';;
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../assets/home/slide1.jpg'
import img2 from '../../assets/home/slide2.jpg'
import img3 from '../../assets/home/slide3.jpg'
import img4 from '../../assets/home/slide4.jpg'
import img5 from '../../assets/home/slide5.jpg'
import ShareTitle from '../../Share/ShareTitle/ShareTitle';

const Order = () => {
    return (
        <div>
            <div>
                <ShareTitle
                    subHeading={"---From 11:00am to 10:00pm---"}
                    heading={"ORDER ONLINE"}
                ></ShareTitle>
            </div>
            <div className='mt-16 mb-[130px]'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} />
                        <h1 className='text-white text-3xl -mt-20 mb-3  text-center uppercase'>Salads</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} />
                        <h1 className='text-white text-3xl -mt-20 mb-3 text-center uppercase'>Soups</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} />
                        <h1 className='text-white text-3xl -mt-20 mb-3 text-center uppercase'>pizzas</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} />
                        <h1 className='text-white text-3xl -mt-20 mb-3 text-center uppercase'>desserts</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} />
                        <h1 className='text-white text-3xl -mt-20 mb-3 text-center uppercase'>Salads</h1>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Order;