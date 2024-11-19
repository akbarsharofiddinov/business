import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import axios from "axios";
import { setAllProducts } from "@/store/productSlice/productSlice";

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const allProducts = useAppSelector((state) => state.product.allProducts);
  const categories = useAppSelector((state) => state.category.categories);

  async function getProducts(categorySlug: string) {
    try {
      const response = await axios.get(
        `https://bizneskatalog.webclub.uz/api/companies/kushmag/${categorySlug}`
      );
      if (response.status === 200) {
        const data = response.data.products.data;
        dispatch(setAllProducts(data));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    categories.map((category) => {
      getProducts(category.slug);
    });
  }, [categories.length]);

  return (
    <>
      <section className="section-gallery">
        <div className="container">
          <div className="section-title">
            <h3 className="title">{t("sections.gallery.title")}</h3>
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
              {allProducts.length
                ? allProducts.map((product, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={`https://bizneskatalog.webclub.uz/images/products/${product.photos[0]}`}
                        alt=""
                      />
                    </SwiperSlide>
                  ))
                : ""}
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
