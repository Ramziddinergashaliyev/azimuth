import React from 'react'
import "./productItem.scss"
import { useParams } from 'react-router-dom'
import { NEWS } from '../../static'

const ProductItem = () => {
    const { id } = useParams()
    const data = NEWS.find(el => el?.id === Number(id))
    console.log(data);
    
    
  return (
    <div className='productItem container'>
       <div className="productItem-img">
         <img src={data?.img} alt="" />
       </div>
       <div className="productItem-info">
        <p className="productItem-info-title">{data?.text}</p>
        <p className="productItem-info-text">{data?.desc}</p>
       </div>
    </div>
  )
}

export default ProductItem