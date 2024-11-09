import React, { useState } from "react";

import logo from "@/assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const Headet: React.FC = () => {
  const [headerMenu, setHeaderMenu] = useState(false);
  return (
    <>
      <header>
        <div className="container">
          <div className="header-inner">
            <a href="/" className="logo">
              <img src={logo} alt="" />
            </a>
            <div className={headerMenu ? "header-menu active" : "header-menu"}>
              <NavLink to={"/catalogs"} className="header-menu_item">
                Katalog
              </NavLink>
              <NavLink to={"/comments"} className="header-menu_item">
                Fikrlar
              </NavLink>
              <NavLink to={"/about"} className="header-menu_item">
                Kompaniya haqida
              </NavLink>
              <button
                className="close-btn"
                onClick={() => setHeaderMenu(false)}
              >
                &times;
              </button>
            </div>
            <div className="contact">
              <a href="tel:+998777777777">+998 77 777-77-77</a>
              <button className="contact-btn">Biz bilan bog'lanish</button>
            </div>

            <button
              className="header-bar_btn"
              onClick={() => setHeaderMenu(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headet;
