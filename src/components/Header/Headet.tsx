import React from "react";

import logo from "@/assets/images/logo.jpg";
import { NavLink } from "react-router-dom";

const Headet: React.FC = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-inner">
            <a href="/" className="logo">
              <img src={logo} alt="" />
            </a>
            <div className="header-menu">
              <NavLink to={"/catalogs"} className="header-menu_item">
                Katalog
              </NavLink>
              <NavLink to={"/comments"} className="header-menu_item">
                Fikrlar
              </NavLink>
              <NavLink to={"/about"} className="header-menu_item">
                Kompaniya haqida
              </NavLink>
            </div>
            <div className="contact">
              <a href="tel:+998777777777">+998 77 777-77-77</a>
              <button className="contact-btn">Biz bilan bog'lanish</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headet;
