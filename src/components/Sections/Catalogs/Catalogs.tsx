import { useAppSelector } from "@/store/hooks/hooks";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Catalogs: React.FC = () => {
  const categories = useAppSelector((state) => state.category.categories);

  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  function getCategoryName(category: ICategory, language: string) {
    const nameKey = `name_${language}` as keyof ICategory;
    return category[nameKey] as string;
  }

  return (
    <>
      <section className="section-catalogs">
        <div className="container">
          <div className="section-title">
            <h3 className="title">{t("header_menu.catalog")}</h3>
          </div>
          <div className="section-inner">
            <div className="catalogs">
              {categories?.length
                ? categories.map((category, index) => (
                    <div className="catalog" key={index}>
                      <Link to={`catalogs/${category.slug}`}></Link>
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
    </>
  );
};

export default Catalogs;
