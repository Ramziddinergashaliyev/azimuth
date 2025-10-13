import React, { useState } from 'react'
import logo1 from "../../../assets/icons/header-logo.png"
import logo2 from "../../../assets/icons/headerEnd-logo.png"
import file from "../../../assets/images/Azimuth-Shelle.pdf"

import ReactFlagsSelect from "react-flags-select";

import "./header.scss"
import { NavLink } from 'react-router-dom'
import { SlMenu } from 'react-icons/sl';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [selected, setSelected] = useState("US");
  const [hide, setHide] = useState(false)

  return (
    <header className='header'>
      <div className="header__top container">
        <NavLink to={"/"} className="header__top-left">
          <img className='header__top-left-img' src={logo1} alt="header-logo" />
        </NavLink>

        <div className="header__top-right">
          <img className='header__top-right-img' src={logo2} alt="headerEnd-logo" />
          <button onClick={() => setHide(true)} className='header__top-right-btn'>
            <SlMenu />
          </button>
        </div>
      </div>

      <nav className='header-nav'>
        <ul className={`header-nav-item ${hide ? "header-nav-item-hide" : ""}`}>

          <button onClick={() => setHide(false)} className="header-nav-item-close">
            <AiOutlineClose />
          </button>

          <li className="header-nav-item-list">
            <NavLink className={"header-nav-item-link"}>Home</NavLink>
          </li>

          <li className="header-nav-item-list">
            <NavLink className={"header-nav-item-link"}>Products</NavLink>
          </li>

          <li className="header-nav-item-list">
            <NavLink className={"header-nav-item-link"}>About us</NavLink>
          </li>

          <li className="header-nav-item-list">
            <NavLink className={"header-nav-item-link"}>Advantages</NavLink>
          </li>

          <li className="header-nav-item-list">
            <NavLink className={"header-nav-item-link"}>News</NavLink>
          </li>

          <li className="header-nav-item-list">
            <NavLink className={"header-nav-item-link"}>Contacts</NavLink>
          </li>

          <li className="header-nav-item-list">
            <a href={file} download className={"header-nav-item-link"}>Download catalog in PDF</a>
          </li>

          <div>
            <ReactFlagsSelect
              defaultCountry="US"
              countries={["US", "RU"]}
              customLabels={{ US: "English", RU: "Русский" }}
              selected={selected}
              onSelect={code => setSelected(code)}
            />
          </div>

        </ul>
      </nav>

    </header>
  )
}

export default Header