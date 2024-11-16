import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import axios from "axios";

import { ProductItem, Products } from "@/components";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { setProducts } from "@/store/productSlice/productSlice";
import { useTranslation } from "react-i18next";

const CatalogDetails: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<ICategory>();
  const { catalogSlug, productSlug, companySlug } = useParams();

  const categories = useAppSelector((state) => state.category.categories);
  const products = useAppSelector((state) => state.product.products);

  const dispatch = useAppDispatch();

  async function getProducts() {
    try {
      const response = await axios.get(
        `https://bizneskatalog.webclub.uz/api/companies/kushmag/${catalogSlug}`
      );
      if (response.status === 200) {
        dispatch(setProducts(response.data.products.data));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  function getCategoryName(category: ICategory, language: string) {
    const nameKey = `name_${language}` as keyof ICategory;
    return category[nameKey] as string;
  }

  useEffect(() => {
    if (categories.length) {
      const foundCategory = categories.find(
        (category) => category.slug === catalogSlug
      );
      setCurrentCategory(foundCategory);
      getProducts();
    }
  }, [categories.length]);

  return (
    <>
      {productSlug ? (
        <Outlet />
      ) : currentCategory ? (
        <div className="section-catalogs catalog-details_page">
          <div className="container">
            <div className="paths">
              <Link to={`/${companySlug}`}>{t("paths.home-page")}</Link>
              <span>/</span>
              <Link to={"/catalogs"}>{t("header_menu.catalog")}</Link>
              <span>/</span>
              <Link to="#" onClick={(e) => e.preventDefault()}>
                {getCategoryName(currentCategory, currentLang)}
              </Link>
            </div>

            <div className="section-inner">
              <div className="section-title">
                <h3 className="title">
                  {getCategoryName(currentCategory, currentLang)}
                </h3>
              </div>

              {products ? (
                <Products>
                  {products.map((product, index) => (
                    <ProductItem data={product} key={index} />
                  ))}
                </Products>
              ) : (
                <h1>No Products</h1>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CatalogDetails;
