import React from "react";

import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/store/hooks/hooks";
import { Link, useParams } from "react-router-dom";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const { companySlug } = useParams();

  const { company } = useAppSelector((state) => state.company);

  const telephones = [...company.telephones];

  return (
    <>
      <footer>
        <div className="container">
          <Link to={`/${companySlug}`} className="logo">
            <img
              src={`https://bizneskatalog.webclub.uz/images/company-logo/${company.logo}`}
              alt=""
            />
            <span>{company.name}</span>
          </Link>
          <div className="footer-inner">
            <div className="social-links">
              <div className="row row-1">
                <a href="#">
                  <GoMail /> Testmail@gmail.com
                </a>
              </div>
              {telephones.length
                ? telephones.map((tel, index) =>
                    tel ? (
                      <div className={`row row-${index}`} key={index}>
                        <a href="#">
                          <FiPhone />{" "}
                          {`+998 ${tel}`.replace(
                            /(\d{2})(\d{3})(\d{2})(\d{2})/,
                            "$1 $2 $3 $4"
                          )}
                        </a>
                      </div>
                    ) : (
                      ""
                    )
                  )
                : ""}
              <div className="row row-3">
                <a href="#">
                  <AiFillInstagram />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaTelegram />
                </a>
                <a href="#">
                  <FaFacebook />
                </a>
              </div>
            </div>
            <form className="contact">
              <input
                type="text"
                placeholder={`${t("sections.footer-contact.name")}`}
              />
              <input type="text" placeholder="+998900000000" />
              <textarea
                placeholder={`${t("sections.footer-contact.textarea")}`}
              ></textarea>
              <button>{t("button.send")}</button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
