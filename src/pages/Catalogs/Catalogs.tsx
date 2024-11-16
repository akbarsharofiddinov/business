import React, { useEffect } from "react";

import { Link, Outlet, useParams } from "react-router-dom";
import { useAppSelector } from "@/store/hooks/hooks";
import { useTranslation } from "react-i18next";

const Catalogs: React.FC = () => {
  const { catalogSlug, companySlug } = useParams();

  const categories = useAppSelector((state) => state.category.categories);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  function getCategoryName(category: ICategory, language: string) {
    const nameKey = `name_${language}` as keyof ICategory;
    return category[nameKey] as string;
  }

  return (
    <>
      {!catalogSlug ? (
        <section className="section-catalogs catalog-page">
          <div className="container">
            <div className="paths">
              <Link to={`/${companySlug}`}>{t("paths.home-page")}</Link>/
              <Link to={"/catalogs"}>{t("header_menu.catalog")}</Link>
            </div>

            <div className="section-inner">
              <div className="section-title">
                <h3 className="title">{t("header_menu.catalog")}</h3>
              </div>
              <div className="catalogs">
                {categories?.length
                  ? categories.map((category, index) => (
                      <div className="catalog" key={index}>
                        {/* <a href={`catalogs/${category.slug}`}></a> */}
                        <Link to={`${category.slug}`}></Link>
                        <img
                          src={`https://bizneskatalog.webclub.uz/images/categories/${category.photo}`}
                          alt=""
                        />
                        <p className="catalog-name">
                          {getCategoryName(category, currentLanguage)}
                        </p>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Catalogs;
