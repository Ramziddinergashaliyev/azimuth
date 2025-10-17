import React, { useState } from 'react'
import "./header.scss"

import logo1 from "../../../assets/icons/header-logo.png"
import logo2 from "../../../assets/icons/headerEnd-logo.png"
import file from "../../../assets/images/Azimuth-Shelle.pdf"

import ReactFlagsSelect from "react-flags-select";
import { NavLink } from 'react-router-dom';
import { SlMenu } from 'react-icons/sl';
import { AiOutlineClose } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [selected, setSelected] = useState("RU");
  const [hide, setHide] = useState(false);
  const { t, i18n } = useTranslation();

  const handleSelect = (code) => {
    setSelected(code);
    if (code === "US") {
      i18n.changeLanguage("en");
    } else if (code === "RU") {
      i18n.changeLanguage("ru");
    }
  };

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
            <HashLink to={"/#"} className="header-nav-item-link">{t("home")}</HashLink>
          </li>

          <li className="header-nav-item-list">
            <HashLink smooth to={'/#products'} className='header-nav-item-link'>
              {t("products")}
            </HashLink>
          </li>

          <li className="header-nav-item-list">
            <HashLink smooth to={"/#about"} className='header-nav-item-link'>
              {t("about")}
            </HashLink>
          </li>

          <li className="header-nav-item-list">
            <HashLink smooth to={"/#engine"} className='header-nav-item-link'>
              {t("advantages")}
            </HashLink>
          </li>

          <li className="header-nav-item-list">
            <HashLink smooth to="/#news" className="header-nav-item-link">
              {t("news")}
            </HashLink>
          </li>

          <li className="header-nav-item-list">
            <HashLink to={"/#contact"} className="header-nav-item-link">{t("contacts")}</HashLink>
          </li>

          <li className="header-nav-item-list">
            <a href={file} download className="header-nav-item-link">
              {t("download")}
            </a>
          </li>

          <div>
            <ReactFlagsSelect
              countries={["US", "RU"]}
              customLabels={{ US: "English", RU: "Русский" }}
              selected={selected}
              onSelect={handleSelect}
            />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
