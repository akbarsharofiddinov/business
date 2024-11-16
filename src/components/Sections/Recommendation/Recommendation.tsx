import React, { useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { useAppSelector } from "@/store/hooks/hooks";
import ProductItem from "@/components/Products/ProductItem";

import axios from "axios";
import { useTranslation } from "react-i18next";

const Recommendation: React.FC = () => {
  const [recProducts, setRecProducts] = useState<
    {
      catalogSlug: string;
      products: IProduct[];
    }[]
  >([]);

  const categories = useAppSelector((state) => state.category.categories);

  async function getProducts(catalogSlug: string) {
    try {
      const response = await axios.get(
        `https://bizneskatalog.webclub.uz/api/companies/kushmag/${catalogSlug}`
      );

      if (response.status === 200) {
        const resProducts: IProduct[] = response.data.products.data;
        if (resProducts.length) {
          const product = { catalogSlug: catalogSlug, products: resProducts };

          setRecProducts((prev) => [...prev, product]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const { t } = useTranslation();

  useEffect(() => {
    if (categories.length) {
      categories.map((category) => {
        getProducts(category.slug);
      });
    }
  }, [categories.length]);

  return (
    <section className="section-recommendation">
      <div className="container">
        <div className="section-title">
          <h3 className="title">{t("sections.recommendation.title")}</h3>
        </div>
        <Swiper
          breakpoints={{
            540: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
            1240: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            prevEl: ".rec-btn_prev",
            nextEl: ".rec-btn_next",
          }}
        >
          {recProducts.length
            ? recProducts.map((item) =>
                item.products.map((product, index) => (
                  <SwiperSlide key={index}>
                    <ProductItem
                      catalogSlug={item.catalogSlug}
                      data={product}
                    />
                  </SwiperSlide>
                ))
              )
            : ""}
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
