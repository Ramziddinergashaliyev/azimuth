import React from 'react'
import "./about.scss"
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t, i18n } = useTranslation()

    return (
        <div id='about' className='about container'>
            <div className="about-info">
                <h3 className="about-info-title">{t("ABOUT US")}</h3>
                <p className="about-info-text">{t("since 2021")}.</p>
                <p className="about-info-text">{t("marketplace")}</p>
                <p className="about-info-text">{t("Company structure")}</p>
                <p className="about-info-text">{t("deliver")}</p>
                <p className="about-info-text">{t("specialists")}</p>
            </div>
            <div className="about-middle">
                <p className="about-middle-title">{t("includes")}</p>
                <ul className="about-middle-item">
                    <li className="about-middle-list">{t("trucks")};</li>
                    <li className="about-middle-list">{t("commercial")};</li>
                    <li className="about-middle-list">{t("Lubricants")};</li>
                    <li className="about-middle-list">{t("Gear oils")};</li>
                    <li className="about-middle-list">{t("Compressor")}</li>
                </ul>
            </div>
        </div>
    )
}

export default About