import { ProductItem } from "@/components";
import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Recommendation: React.FC = () => {
  return (
    <section className="section-recommendaition">
      <div className="container">
        <div className="section-title">
          <h3 className="title">Tavsiya qilamiz</h3>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            prevEl: ".rec-btn_prev",
            nextEl: ".rec-btn_next",
          }}
        >
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-btns">
          <button className="rec-btn_prev">
            <HiArrowLeft />
          </button>
          <button className="rec-btn_next">
            <HiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
