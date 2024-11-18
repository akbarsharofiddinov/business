import React, { useState } from "react";

import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { FaBars, FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { AiFillInstagram } from "react-icons/ai";
import { MySelect } from "@/components";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/store/hooks/hooks";
import { CiGlobe } from "react-icons/ci";
import { TbArrowsExchange } from "react-icons/tb";

const Headet: React.FC = () => {
  const [headerMenu, setHeaderMenu] = useState(false);
  const [changeCompany, setChangeCompany] = useState(false);

  const { t, i18n } = useTranslation();
  const { company, allCompanies } = useAppSelector((state) => state.company);
  const { companySlug } = useParams();

  const navigate = useNavigate();

  const telephones = [...company.telephones];

  const languages: string[] = Object.keys(i18n.options.resources || {});

  window.addEventListener("click", () => {
    if (changeCompany) {
      setChangeCompany(false);
    }
  });

  return (
    <>
      <header>
        <div className="container">
          <div className="header-inner">
            <Link to={`/${companySlug}`} className="logo">
              <img
                src={`https://bizneskatalog.webclub.uz/images/company-logo/${company.logo}`}
                alt="logo image"
              />
              <span>{company.name}</span>
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setChangeCompany((prev) => !prev);
                  }}
                >
                  <TbArrowsExchange />
                </button>
                <div className={changeCompany ? "menu active" : "menu"}>
                  {allCompanies.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        navigate(`/${item.slug}`);
                        setChangeCompany(false);
                      }}
                    >
                      {item.name}
                    </li>
                  ))}
                </div>
              </div>
            </Link>
            <div className={headerMenu ? "header-menu active" : "header-menu"}>
              <NavLink
                to={"catalogs"}
                className="header-menu_item"
                onClick={() => setHeaderMenu(false)}
              >
                {t("header_menu.catalog")}
                <span>
                  <GoArrowUpRight />
                </span>
              </NavLink>
              <NavLink
                to={"comments"}
                className="header-menu_item"
                onClick={() => setHeaderMenu(false)}
              >
                {t("header_menu.comments")}
                <span>
                  <GoArrowUpRight />
                </span>
              </NavLink>
              <NavLink
                to={"about"}
                className="header-menu_item"
                onClick={() => setHeaderMenu(false)}
              >
                {t("header_menu.about_company")}
                <span>
                  <GoArrowUpRight />
                </span>
              </NavLink>
              <div className="top">
                <Link to={"/"}>
                  <img
                    src={`https://bizneskatalog.webclub.uz/images/company-logo/${company.logo}`}
                    alt=""
                  />
                  <span>{company.name}</span>
                </Link>
                <button
                  className="close-btn"
                  onClick={() => setHeaderMenu(false)}
                >
                  &times;
                </button>
              </div>
              <div className="contact">
                {telephones.map((item, index) =>
                  item ? (
                    <a href={`tel:+998${item}`} key={index}>
                      {`+998 ${item.replace(
                        /(\d{2})(\d{3})(\d{2})(\d{2})/,
                        "$1 $2 $3 $4"
                      )}`}
                    </a>
                  ) : (
                    ""
                  )
                )}
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
              <MySelect
                current={i18n.language}
                list={languages}
                beforeIcon={<CiGlobe />}
              />
              <div className="contact">
                {telephones
                  ? telephones.map((item, index) =>
                      item ? (
                        <a href={`tel:+998${item}`} key={index}>
                          {`+998 ${item.replace(
                            /(\d{2})(\d{3})(\d{2})(\d{2})/,
                            "$1 $2 $3 $4"
                          )}`}
                        </a>
                      ) : (
                        ""
                      )
                    )
                  : ""}
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
