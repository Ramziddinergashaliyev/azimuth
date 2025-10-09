import React from "react";
import "./news.scss"
import { FaArrowRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { NEWS } from "../../static";

const News = () => {

    const data = NEWS
    console.log(data);
    

    return (
        <div className="news container">
            <div className="news-top">
                <h3 className="news-top-title">THE NEWS</h3>
                <p className="news-top-text">View all post <GoArrowRight /> </p>
            </div>
            <div className="news-cards">
                <div className="news-card">
                    <div className="news-card-img">
                        <img src="" alt="news-img" />
                    </div>
                    <div className="news-card-info">
                        <h3 className="news-card-info-title"></h3>
                        <p className="news-card-info-text"></p>
                        <p className="news-card-info-desc">Read more</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News