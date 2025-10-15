import React, { useEffect } from 'react'
import "./productItem.scss"
import { useParams } from 'react-router-dom'
import { NEWS } from '../../static'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { Autoplay } from "swiper/modules";

import img1 from "../../assets/images/swipper-1.webp"
import img2 from "../../assets/images/swipper-2.webp"
import img3 from "../../assets/images/swipper-3.webp"
import img4 from "../../assets/images/swipper-4.webp"
import img5 from "../../assets/images/swipper-5.webp"
import img6 from "../../assets/images/swipper-6.webp"
import img7 from "../../assets/images/swipper-7.webp"
import img8 from "../../assets/images/swipper-8.webp"
import img9 from "../../assets/images/swipper-9.webp"

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

const ProductItem = () => {
  const { id } = useParams()
  const data = NEWS.find(el => el?.id === Number(id))

  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  return (
    <div className='productItem container'>

      <div className="productItem-img">
        <img src={data?.img} alt="product-img" />
      </div>

      <div className="productItem-info">
        <p className="productItem-info-title">{data?.text}</p>
        <p className="productItem-info-text">{data?.desc}</p>
      </div>

      <div className="productItem-link">
        <div className="productItem-link-top">
          <p className="productItem-link-top-title">{data?.oneLink}: </p>
          <a className='productItem-link-top-link' href={data?.linkOne}> {data?.linkOne}</a>
        </div>

        <div className="productItem-link-bottom">
          <p className="productItem-link-bottom-title">{data?.twoLink}:</p>
          <a className='productItem-link-bottom-link' href={data?.linkTwo}>{data?.linkTwo}</a>
        </div>
      </div>

      {
        data?.title === "Our marketplace exzap.uz"
          ?
          <div className="productItem-swipper">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {
                imgs?.map((el, i) => (
                  <SwiperSlide
                    key={i}
                    className='productItem-swipper-img'
                    style={{
                      backgroundImage: `url(${el})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: '630px'
                    }}
                  >
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          :
          <></>
      }
    </div>
  )
}

export default ProductItem