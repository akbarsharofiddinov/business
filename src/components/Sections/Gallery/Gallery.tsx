import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import gallery from "@/assets/images/gallery.png";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { Navigation } from "swiper/modules";

const Gallery: React.FC = () => {
  return (
    <>
      <section className="section-gallery">
        <div className="container">
          <div className="section-title">
            <h3 className="title">Galereya</h3>
          </div>
          <div className="section-inner">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              modules={[Navigation]}
              navigation={{
                prevEl: ".gallery-prev",
                nextEl: ".gallery-next",
              }}
            >
              <SwiperSlide>
                <img src={gallery} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gallery} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gallery} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gallery} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gallery} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gallery} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gallery} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gallery} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gallery} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gallery} alt="" />
              </SwiperSlide>
            </Swiper>

            <div className="swiper-btns">
              <button className="gallery-prev">
                <HiArrowLeft />
              </button>
              <button className="gallery-next">
                <HiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
