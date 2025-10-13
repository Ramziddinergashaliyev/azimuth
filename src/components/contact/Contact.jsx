import React from 'react'
import "./contact.scss"
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const Contact = () => {
    return (
        <div className='contact container'>
            <h3 className="contact-title">Contact us and we will deliver oils and lubricants anywhere in Uzbekistan</h3>
            <div className="contact-form">
                <div className="contact-form-left">
                    <div className="contact-form-left-info">
                        <p className="contact-form-left-info-title"><FaMapMarkerAlt />Uzbekistan, Tashkent region, Zangiota district, Istiklol MFY, Ankhor street, 1 A-house</p>
                        <p className="contact-form-left-info-title"><FaPhoneAlt /><a href="tel:71 202 46 62">71 202 46 62</a> , <a href="tel:99 405 14 40">99 405 14 40</a></p>
                        <p className="contact-form-left-info-title"><IoMdMail /> import@rtgparts.uz</p>
                    </div>
                    <div className="contact-form-left-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1766.4469351742864!2d69.15198542793976!3d41.2033154510315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6333cadc48bd%3A0x4959c386e0751048!2zRVhaQVAg0JDQstGC0L7Qt9Cw0L_Rh9Cw0YHRgtC4INC4INC80LDRgdC70LA!5e0!3m2!1sru!2sus!4v1760005888419!5m2!1sru!2sus" style={{ width: "100%", height: "450px", border: '0' }} loading="lazy"></iframe>
                    </div>
                </div>
                <div className="contact-form-right">
                    <div className="contact-form-right-info">
                        <h3 className="contact-form-right-info-title">Didn’t find what you were looking for?</h3>
                        <p className="contact-form-right-info-text">Any other questions? We will call you back and help you!</p>
                    </div>
                    <form className='contact-form-right-massage' action="">
                        <label htmlFor="">
                            Your Name
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            Phone
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            Your Email
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            Organization
                            <textarea name="" id=""></textarea>
                        </label>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact