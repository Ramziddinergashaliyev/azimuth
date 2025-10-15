import React, { useEffect } from 'react'
import "./productItem.scss"
import { useParams } from 'react-router-dom'
import { NEWS } from '../../static'

import img1 from "../../assets/images/swipper-1.webp"
import img2 from "../../assets/images/swipper-2.webp"
import img3 from "../../assets/images/swipper-3.webp"
import img4 from "../../assets/images/swipper-4.webp"
import img5 from "../../assets/images/swipper-5.webp"
import img6 from "../../assets/images/swipper-6.webp"
import img7 from "../../assets/images/swipper-7.webp"
import img8 from "../../assets/images/swipper-8.webp"
import img9 from "../../assets/images/swipper-9.webp"

const ProductItem = () => {
    const { id } = useParams()
    const data = NEWS.find(el => el?.id === Number(id))

    useEffect(() => {
      scrollTo(0,0)
    },[])
    
  return (
    <div className='productItem container'>
       <div className="productItem-img">
         <img src={data?.img} alt="product-img" />
       </div>
       <div className="productItem-info">
        <p className="productItem-info-title">{data?.text}</p>
        <p className="productItem-info-text">{data?.desc}</p>
       </div>
    </div>
  )
}

export default ProductItem