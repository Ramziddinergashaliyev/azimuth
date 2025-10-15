import React from 'react'
import "./swipper.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import img1 from "../../assets/swipper/swipper-1.png"
import img2 from "../../assets/swipper/swipper-2.png"
import img3 from "../../assets/swipper/swipper-3.png"
import img4 from "../../assets/swipper/swipper-4.png"
import img5 from "../../assets/swipper/swipper-5.png"
import img6 from "../../assets/swipper/swipper-6.png"
import img7 from "../../assets/swipper/swipper-7.png"
import img8 from "../../assets/swipper/swipper-8.png"
import img9 from "../../assets/swipper/swipper-9.png"
import { useTranslation } from 'react-i18next';

const SWIPPER = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 },
    { id: 9, img: img9 },
]
                              
const Swipper = () => {
    const { t, i18n } = useTranslation()

    return (
        <div id='swipper' className='swipper container'>
            <h2 className="swipper-title">{t("Shell Products")}</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true} 
                autoplay={{
                    delay: 2500, 
                    disableOnInteraction: false, 
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {SWIPPER?.map(el => (
                    <SwiperSlide key={el?.id} className='swipper-card'>
                        <img className='swipper-card-img' src={el?.img} alt="swipper-card-img" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Swipper