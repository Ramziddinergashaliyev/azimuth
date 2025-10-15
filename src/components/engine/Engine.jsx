import React from 'react'
import "./engine.scss"
import { FaCheckCircle } from 'react-icons/fa'

import img from "../../assets/images/about.webp"
import { Riple } from 'react-loading-indicators'
import { useTranslation } from 'react-i18next'

const Engine = () => {
   const { t, i18n } = useTranslation()

    return (
        <div id='engine' className='engine'>
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
                    <p className="engine-card-right-text">{t("Confident")}</p>
                    <h2 className="engine-card-right-title">{t("Enhanced")}</h2>
                    <p className="engine-card-right-desc">{t("Advantages")}</p>
                    <ul className="engine-card-right-item">
                        <li className="engine-card-right-list"><FaCheckCircle />{t("life")}</li>
                        <li className="engine-card-right-list"><FaCheckCircle />{t("Увеличенные")}</li>
                        <li className="engine-card-right-list"><FaCheckCircle />{t("Reducing")}</li>
                        <li className="engine-card-right-list"><FaCheckCircle />{t("protection")}</li>
                        <li className="engine-card-right-list"><FaCheckCircle />{t("Снижение")}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Engine