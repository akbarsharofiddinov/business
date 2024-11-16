import React, { useState } from "react";

import logo from "@/assets/images/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { AiFillInstagram } from "react-icons/ai";
import { MySelect } from "@/components";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/store/hooks/hooks";

const Headet: React.FC = () => {
  const [headerMenu, setHeaderMenu] = useState(false);

  const { t, i18n } = useTranslation();
  const { company } = useAppSelector((state) => state.company);

  const telephones = [...company.telephones];

  const languages: string[] = Object.keys(i18n.options.resources || {});

  return (
    <>
      <header>
        <div className="container">
          <div className="header-inner">
            <a href="/" className="logo">
              <img
                src={`https://bizneskatalog.webclub.uz/images/company-logo/${company.logo}`}
                alt="logo image"
              />
              <span>{company.name}</span>
            </a>
            <div className={headerMenu ? "header-menu active" : "header-menu"}>
              <NavLink to={"/catalogs"} className="header-menu_item">
                {t("header_menu.catalog")}
                <span>
                  <GoArrowUpRight />
                </span>
              </NavLink>
              <NavLink to={"/comments"} className="header-menu_item">
                {t("header_menu.comments")}
                <span>
                  <GoArrowUpRight />
                </span>
              </NavLink>
              <NavLink to={"/about"} className="header-menu_item">
                {t("header_menu.about_company")}
                <span>
                  <GoArrowUpRight />
                </span>
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
                {telephones.map((item, index) => (
                  <a href={`tel:+998${item}`} key={index}>
                    {`+998 ${item.replace(
                      /(\d{2})(\d{3})(\d{2})(\d{2})/,
                      "$1 $2 $3 $4"
                    )}`}
                  </a>
                ))}
                <button className="contact-btn">
                  {t("button.header-contact")}
                </button>
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
            <div className="right">
              <MySelect current={i18n.language} list={languages} />
              <div className="contact">
                {telephones.map((item, index) => (
                  <a href={`tel:+998${item}`} key={index}>
                    {`+998 ${item.replace(
                      /(\d{2})(\d{3})(\d{2})(\d{2})/,
                      "$1 $2 $3 $4"
                    )}`}
                  </a>
                ))}
                <button className="contact-btn">
                  {t("button.header-contact")}
                </button>
              </div>
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
