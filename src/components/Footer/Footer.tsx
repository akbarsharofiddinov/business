import React from "react";

import { FiPhone } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa6";
import { useAppSelector } from "@/store/hooks/hooks";
import { Link, useParams } from "react-router-dom";

const Footer: React.FC = () => {
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
                {telephones.length
                  ? telephones.map((tel, index) =>
                      tel ? (
                        <a href="#" key={index}>
                          <FiPhone />{" "}
                          {`+998 ${tel}`.replace(
                            /(\d{2})(\d{3})(\d{2})(\d{2})/,
                            "$1 $2 $3 $4"
                          )}
                        </a>
                      ) : (
                        ""
                      )
                    )
                  : ""}
              </div>
              <div className="row row-3">
                {company.instagram ? (
                  <a href={company.instagram}>
                    <AiFillInstagram />
                  </a>
                ) : (
                  ""
                )}
                {company.youtube ? (
                  <a href={company.youtube}>
                    <FaYoutube />
                  </a>
                ) : (
                  ""
                )}
                {company.telegram ? (
                  <a href={company.telegram}>
                    <FaTelegram />
                  </a>
                ) : (
                  ""
                )}
                {company.facebook ? (
                  <a href={company.facebook}>
                    <FaFacebook />
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
