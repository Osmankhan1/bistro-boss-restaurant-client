import { useEffect, useState } from "react";
import ShareTitle from "../../../Share/ShareTitle/ShareTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import logo from '../../../assets/home/tes.png'



const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('Review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <ShareTitle
                subHeading={"---What Our Clients Say---"}
                heading={'TESTIMONIALS'}

            ></ShareTitle>
            <div className="mt-12 mb-32">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                    {
                        reviews &&
                        reviews.map(reviewData => <SwiperSlide key={reviewData._id}>
                            <div className="m-auto">
                                <div className="flex justify-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={reviewData.rating}
                                        readOnly
                                    />
                                </div>
                                <img className="w-[100px] h-[100px] m-auto my-12" src={logo} alt="" />
                                <p className="text-center w-[1096px] my-3 m-auto">{reviewData.details}</p>
                                <h1 className="text-center text-3xl text-[#CD9003]">{reviewData.name}</h1>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Review;