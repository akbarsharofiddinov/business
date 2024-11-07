import React from "react";
import banner from "@/assets/images/banner.png";

const Banner: React.FC = () => {
  return (
    <>
      <section className="section-banner">
        <div className="container">
          <div className="inner">
            <img src={banner} alt="" />
            <div className="banner-inner">
              <h3 className="title">Premium eshiklar</h3>
              <a href="#">Batafsil</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
