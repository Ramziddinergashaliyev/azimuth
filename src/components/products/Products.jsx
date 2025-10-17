import React, { useState } from 'react'
import "./products.scss"
import { PRODUCTS } from '../../static'
import { useTranslation } from 'react-i18next'

const Products = () => {
    const { t, i18n } = useTranslation()
    
    const [productData, setProductData] = useState(PRODUCTS[0])
    
    const data = PRODUCTS

    // const dataLang = i18n?.languages?.[0] === "ru" ? PRODUCTSRU : PRODUCTS 
    return (
        <div id='products' className='products'>
            <div className="products-card container">
                <div className="products__left">
                    {
                        data?.map(el => (
                            <div onClick={() => setProductData(el)} key={el?.id} className={`products__left-card ${productData?.id === el?.id ? "active" : ""}`}>
                                <p className="products__left-card-title">{el?.title}</p>
                            </div>
                        ))
                    }
                </div>

                <div className='products__right'>
                    {
                        productData?.info?.map(el => (
                            <div key={el?.id} className="products__right-card">
                                <p>{el?.title}</p>
                                <p>{el?.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products