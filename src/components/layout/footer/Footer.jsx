import React from 'react'
import img1 from "../../../assets/icons/header-logo.png"
import img2 from "../../../assets/icons/headerEnd-logo.png"

import "./footer.scss"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-line"></div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <img src={img1} alt="footer-img" />
            <p className="footer-bottom-left-title">Copyright all rights reserved 2024.
            </p>
          </div>
          <div className="footer-bottom-right">
            <img src={img2} alt="footer-logo" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer