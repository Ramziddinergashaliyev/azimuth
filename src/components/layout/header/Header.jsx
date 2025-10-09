import React, { useState } from 'react'
import logo1 from "../../../assets/icons/header-logo.png"
import logo2 from "../../../assets/icons/headerEnd-logo.png"
import ru from "../../../assets/icons/ru.png"
import en from "../../../assets/icons/en.png"

import ReactFlagsSelect from "react-flags-select";

import "./header.scss"
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [selected, setSelected] = useState("US");

  return (
    <header className='header'>

      <div className="header__top container">
        <div className="header__top-left">
          <img className='header__top-left-img' src={logo1} alt="header-logo" />
        </div>

        <div className="header__top-right">
          <img className='header__top-right-img' src={logo2} alt="headerEnd-logo" />
        </div>
      </div>

      <nav className='header-nav'>

        <ul className="header-nav-item">
          
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
            <NavLink className={"header-nav-item-link"}>Download catalog in PDF</NavLink>
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