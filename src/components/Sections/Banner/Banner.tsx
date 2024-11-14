import React from "react";

import { useAppSelector } from "@/store/hooks/hooks";
import { Link } from "react-router-dom";

const Banner: React.FC = () => {
  const { company } = useAppSelector((state) => state.company);

  return (
    <>
      {company ? (
        <section className="section-banner">
          <div className="container">
            <div className="inner">
              <img
                src={`https://bizneskatalog.webclub.uz/images/banner/${company.banner_image}`}
                alt=""
              />
              <div className="banner-inner">
                <h3 className="title">{company.banner_text_uz}</h3>
                <Link to={"/about"}>Batafsil</Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h1>No Company</h1>
      )}
    </>
  );
};

export default Banner;
