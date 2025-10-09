import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import img1 from "../../assets/images/hero-1.jpg"
import img2 from "../../assets/images/hero-2.jpg"
import img3 from "../../assets/images/hero-3.jpg"

import 'swiper/css';
import 'swiper/css/pagination';

import "./hero.scss"

const Hero = () => {
    return (
        <div className='hero'>
            <Swiper
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
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
                    <div className="hero-item-info">
                        <p className="hero-item-info-title-big">Shell - Azimuth</p>
                        <p className="hero-item-info-title">Official macro distributor on the territory of the Republic of Uzbekistan</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='hero-item'>
                    <img className='hero-item-img' src={img3} alt="hero-img" />
                    <div className="hero-item-info">
                        <p className="hero-item-info-text">Handing over certificates “AZIMUTH LUBRICANTS GROUP”</p>
                        <p className="hero-item-info-text">for authorized Shell lubricant retail outlets</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Hero