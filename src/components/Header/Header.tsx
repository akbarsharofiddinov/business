import React, { useState } from "react";

import logo from "@/assets/images/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { AiFillInstagram } from "react-icons/ai";

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
                <span><GoArrowUpRight /></span>
              </NavLink>
              <NavLink to={"/comments"} className="header-menu_item">
                Fikrlar
                <span><GoArrowUpRight /></span>
              </NavLink>
              <NavLink to={"/about"} className="header-menu_item">
                Kompaniya haqida
                <span><GoArrowUpRight /></span>
              </NavLink>
              <div className="top">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
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
              <div className="social-links">
                <a href="#">
                  <FaFacebook />
                  <span>Facebook</span>
                </a>
                <a href="#">
                  <AiFillInstagram />
                  <span>Instagram</span>
                </a>
                <a href="#">
                  <FaTelegram />
                  <span>Telegram</span>
                </a>
                <a href="#">
                  <FaYoutube />
                  <span>Youtube</span>
                </a>
              </div>
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
