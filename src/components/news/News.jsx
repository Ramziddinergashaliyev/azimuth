import React from "react";
import "./news.scss"
import { FaArrowRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { NEWS, NEWSRU } from "../../static";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const News = ({ top }) => {
    const navigate = useNavigate()
    const { t, i18n } = useTranslation()
    const dataLang = i18n?.languages?.[0] === "ru" ? NEWSRU : NEWS

    return (
        <div id="news" className="news container">

            {
                top === true
                    ?
                    <></>
                    :
                    <div className="news-top">
                        <h3 className="news-top-title">THE NEWS</h3>
                        <NavLink to={"/new"} className="news-top-text">View all post <GoArrowRight /> </NavLink>
                    </div>
            }

            <div className="news-cards">
                {
                    dataLang?.map(el => (
                        <div key={el?.id} className="news-card">
                            <div onClick={() => navigate(`/productItem/${el?.id}`)} className="news-card-img">
                                <img src={el?.img} alt="news-img" />
                            </div>
                            <div className="news-card-info">
                                <h3 className="news-card-info-title">{el?.title}</h3>
                                <p className="news-card-info-text">{el?.text}</p>
                                <p className="news-card-info-desc">{t("Read more")}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default News