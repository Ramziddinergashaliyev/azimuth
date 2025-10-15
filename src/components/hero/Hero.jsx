import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import img1 from "../../assets/images/hero-1.webp"
import img2 from "../../assets/images/hero-2.webp"
import img3 from "../../assets/images/hero-3.webp"

import 'swiper/css';
import 'swiper/css/pagination';

import "./hero.scss"
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t, i18n } = useTranslation()
    
    return (
        <div id='hero' className='hero'>
            <Swiper
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper "
            >
                <SwiperSlide className='hero-item'>
                    <img className='hero-item-img' src={img1} alt="hero-img" />
                </SwiperSlide>

                <SwiperSlide className='hero-item'>
                    <img className='hero-item-img' src={img2} alt="hero-img" />
                    <div className="hero-item-info container">
                        <p className="hero-item-info-title-big">{t("Shell - Azimuth")}</p>
                        <p className="hero-item-info-title">{t("Republic of Uzbekistan")}</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='hero-item'>
                    <img className='hero-item-img' src={img3} alt="hero-img" />
                    <div className="hero-item-info container">
                        <p className="hero-item-info-text">{t("AZIMUTH LUBRICANTS GROUP")}</p>
                        <p className="hero-item-info-text">{t("outlets")}</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Hero