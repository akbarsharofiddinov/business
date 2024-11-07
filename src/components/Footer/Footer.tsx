import React from "react";

import logo from "@/assets/images/logo.jpg";
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="container">
          <a href="/" className="logo">
            <img src={logo} alt="" />
          </a>
          <div className="footer-inner">
            <div className="social-links">
              <div className="row row-1">
                <a href="#">
                  <GoMail /> Testmail@gmail.com
                </a>
              </div>
              <div className="row row-2">
                <a href="#">
                  <FiPhone /> +998 77 777-77-77
                </a>
              </div>
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
              <input type="text" placeholder="Ismingiz" />
              <input type="text" placeholder="+998900000000" />
              <textarea placeholder="Qisqacha habaringiz"></textarea>
              <button>Yuborish</button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
