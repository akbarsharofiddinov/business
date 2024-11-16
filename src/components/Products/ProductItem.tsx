import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface IProps {
  data: IProduct;
  catalogSlug?: string;
}

const ProductItem: React.FC<IProps> = ({ data, catalogSlug }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const getProductName = (product: IProduct, lang: string) => {
    const nameKey = `name_${lang}` as keyof IProduct;
    return product[nameKey] as string;
  };

  return (
    <>
      <div className="product-item">
        <div className="img-box">
          <img
            src={`https://bizneskatalog.webclub.uz/images/products/${data.photos[0]}`}
            alt=""
          />
        </div>
        <div className="body">
          <p className="name">
            {getProductName(data, currentLang).slice(0, 30) + "..."}
          </p>
          <div className="price">
            <p>{t("sections.product-details.price")}:</p>
            <p>
              {data.price} {t("sections.product-details.sum")}
            </p>
          </div>
          {catalogSlug ? (
            <Link
              to={`/catalogs/${catalogSlug}/${data.slug}`}
              className="product-details"
              onClick={() => window.scrollTo(0, 0)}
            >
              {t("button.more-btn")}
            </Link>
          ) : (
            <Link to={`${data.slug}`} className="product-details">
              {t("button.more-btn")}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
