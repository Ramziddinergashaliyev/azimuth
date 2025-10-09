import React from 'react'
import "./about.scss"

const About = () => {
    return (
        <div className='about container'>
            <div className="about-info">
                <h3 className="about-info-title">ABOUT US</h3>
                <p className="about-info-text">“AZIMUTH LUBRICANTS GROUP” is the official macro distributor of Shell in the Republic of Uzbekistan since 2021.</p>
                <p className="about-info-text">A trading company that includes commercial wholesale and retail trade, its own retail network of stores and services, a proprietary PZM logistics center and the EXZAP.UZ marketplace.</p>
                <p className="about-info-text">Company structure: wholesale department with regional managers, retail department with sales department, own retail network, branches throughout the Republic of Uzbekistan. The company employs more than 50 people. Our company specializes in wholesale supplies of Shell motor oils for cars and trucks, as well as industrial lubricants for industrial enterprises. We are direct suppliers and offer original products at affordable prices.</p>
                <p className="about-info-text">We deliver products throughout the Republic of Uzbekistan.</p>
                <p className="about-info-text">Our specialists will help you select oils and lubricants for any equipment. Necessary approvals, approval of equipment manufacturers, affordable price. It is convenient to work with us.m</p>
            </div>
            <div className="about-middle">
                <p className="about-middle-title">The product range includes:</p>
                <ul className="about-middle-item">
                    <li className="about-middle-list">Motor oils for cars and trucks;</li>
                    <li className="about-middle-list">Hydraulic oils and fluids for equipment and commercial vehicles;</li>
                    <li className="about-middle-list">Lubricants for special and general purposes;</li>
                    <li className="about-middle-list">Gear oils;</li>
                    <li className="about-middle-list">Compressor oils and much more.</li>
                </ul>
            </div>
        </div>
    )
}

export default About