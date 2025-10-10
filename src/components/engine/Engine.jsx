import React from 'react'
import "./engine.scss"
import { FaCheckCircle } from 'react-icons/fa'

import img from "../../assets/images/about.png"
import { Riple } from 'react-loading-indicators'

const Engine = () => {
    return (
        <div className='engine'>
            <div className="engine-card container">
                <div className="engine-card-left">
                    <img className='engine-card-left-img' src={img} alt="engine-img" />
                    <a href="https://www.youtube.com/watch?v=d9JQb12Kqqs">
                        <div className="engine-card-left-loading">
                            <Riple color="#fff" size="large" text="" textColor="" />
                        </div>
                    </a>
                </div>
                <div className="engine-card-right">
                    <p className="engine-card-right-text">Confident in the engine confident in the way</p>
                    <h2 className="engine-card-right-title">Enhanced dynamic engine protection technology!</h2>
                    <p className="engine-card-right-desc">Advantages of oils</p>
                    <ul className="engine-card-right-item">
                        <li className="engine-card-right-list"><FaCheckCircle />Long service life</li>
                        <li className="engine-card-right-list"><FaCheckCircle />Extended oil change intervals</li>
                        <li className="engine-card-right-list"><FaCheckCircle />Reducing oil consumption for topping up</li>
                        <li className="engine-card-right-list"><FaCheckCircle />Engine protection in all weather conditions</li>
                        <li className="engine-card-right-list"><FaCheckCircle />Reduced fuel and maintenance costs</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Engine