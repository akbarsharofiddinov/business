import React from "react";
import { useTranslation } from "react-i18next";
import { IoFilterOutline } from "react-icons/io5";
interface IProps {
  children: React.ReactNode[];
}

const Products: React.FC<IProps> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="filtering-box">
        <p className="results">
          {t("filter-box.result")}: <span>{children.length}</span>{" "}
          {t("filter-box.quantity")}
        </p>
        <button className="filter-btn">
          <IoFilterOutline /> {t("filter-box.filter")}
        </button>
      </div>
      <div className="products">{children}</div>
    </>
  );
};

export default Products;
