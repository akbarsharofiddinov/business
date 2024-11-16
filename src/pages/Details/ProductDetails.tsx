import React, { useEffect, useState } from "react";

import { MyModal, Recommendation } from "@/components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/store/hooks/hooks";

const ProductDetails: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<IProduct>();

  const { catalogSlug, productSlug } = useParams();

  async function getCurrentProduct() {
    try {
      const response = await axios.get(
        `https://bizneskatalog.webclub.uz/api/companies/kushmag/${catalogSlug}/${productSlug}`
      );

      if (response.status === 200) {
        setCurrentProduct(response.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const { categories } = useAppSelector((state) => state.category);

  function getCurrentCategoryLang(lang: string) {
    const foundCategory = categories.find(
      (category) => category.slug === catalogSlug
    );

    if (foundCategory) {
      const nameKey = `name_${lang}` as keyof ICategory;
      return foundCategory[nameKey] as string;
    }
  }

  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  useEffect(() => {
    getCurrentProduct();
  }, [productSlug]);

  return (
    <>
      {currentProduct ? (
        <section className="section-product-details">
          <div className="container">
            <div className="paths">
              <Link to={"/"}>{t("paths.home-page")}</Link>
              <span>/</span>
              <Link to={"/catalogs"}>{t("header_menu.catalog")}</Link>
              <span>/</span>
              <Link
                to={`/catalogs/${catalogSlug}`}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  textTransform: "capitalize",
                  fontSize: 16,
                }}
              >
                {getCurrentCategoryLang(currentLang)?.split("-").join(" ")}
              </Link>
              <span>/</span>
              <a href="#" onClick={(e) => e.preventDefault()}>
                {currentProduct.name_uz}
              </a>
            </div>
            <div className="section-inner">
              <div className="section-title">
                <h3 className="title">{currentProduct.name_uz}</h3>
              </div>
              <div className="product-info_box">
                <img
                  src={`https://bizneskatalog.webclub.uz/images/products/${currentProduct.photos[0]}`}
                  alt=""
                />

                <div className="info">
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        currentProduct[
                          `description_${currentLang}` as keyof IProduct
                        ]!,
                    }}
                  />
                  <div className="ordering_and_price">
                    <p>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.25 12.0004C1.25 17.9374 6.06293 22.7504 12 22.7504C17.937 22.7504 22.75 17.9374 22.75 12.0004C22.75 9.88997 22.1418 7.92161 21.0912 6.26096C20.9466 6.03233 20.8743 5.91801 20.7456 5.89407C20.6169 5.87013 20.5078 5.95121 20.2895 6.11336C19.8488 6.44067 19.4011 6.81548 18.9513 7.22873C17.7865 8.29889 16.6641 9.57391 15.6793 10.8106C14.6965 12.0448 13.8631 13.2253 13.275 14.098C12.9814 14.5338 12.7498 14.8916 12.5923 15.1392C12.5136 15.2631 12.4535 15.3593 12.4134 15.4238L12.3686 15.4965L12.3578 15.5141L12.3554 15.518C12.1717 15.8208 11.8411 16.0047 11.487 16.0001C11.1328 15.9955 10.8075 15.8038 10.6317 15.4963C9.68252 13.8351 8.89836 13.0872 8.42653 12.7569C8.19207 12.5928 8.03257 12.5301 7.96242 12.5078C7.95822 12.5064 7.95613 12.5058 7.94819 12.5037C7.94119 12.5019 7.92946 12.4994 7.92233 12.4982C7.91424 12.4969 7.90562 12.4959 7.88836 12.494C7.38862 12.4385 7 12.0147 7 11.5001C7 10.9479 7.44771 10.5001 8 10.5001C8.07902 10.4914 8.30342 10.4995 8.56882 10.6019C8.84242 10.689 9.18292 10.845 9.57346 11.1184C10.1027 11.4889 10.7189 12.0711 11.3895 12.9842C11.4462 13.0614 11.5629 13.0599 11.6164 12.9804C12.2251 12.0771 13.0902 10.8513 14.1147 9.56472C15.1373 8.28055 16.331 6.92015 17.5982 5.75595C18.0072 5.38023 18.4299 5.01918 18.8628 4.685C19.1389 4.47188 19.277 4.36533 19.2799 4.22175C19.2829 4.07818 19.158 3.97335 18.9083 3.7637C17.04 2.19507 14.6303 1.25037 12 1.25037C6.06293 1.25037 1.25 6.0633 1.25 12.0004Z"
                          fill="#242BC4"
                        />
                      </svg>
                      {t("ordering-info.available")}
                    </p>
                    <div className="price-tag">
                      <p>
                        {t("sections.product-details.price")}:{" "}
                        {currentProduct.price}
                      </p>
                      <p>{t("ordering-info.based-order")}</p>
                    </div>
                    <div className="count-box">
                      <button>-</button>
                      <span className="count">1</span>
                      <button>+</button>
                    </div>
                    <button
                      className="order-btn"
                      onClick={() => setModal(true)}
                    >
                      {t("button.order-btn")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Recommendation />
          </div>
        </section>
      ) : (
        ""
      )}

      {modal ? (
        <MyModal modal={modal} setModal={setModal}>
          <form>
            <h4 className="title">{t("modal-form.title")}</h4>
            <input
              type="text"
              placeholder={t("sections.footer-contact.name")}
            />
            <input type="text" placeholder="+998 00 000 00 00" />
            <button>{t('modal-form.button')}</button>
          </form>
        </MyModal>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductDetails;
