import React from "react";

import { useAppSelector } from "@/store/hooks/hooks";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Banner: React.FC = () => {
  const { company } = useAppSelector((state) => state.company);

  const { t, i18n } = useTranslation();

  const getBannerTitle = (lang: string) => {
    const nameKey = `banner_text_${lang}` as keyof ICompany;
    return company[nameKey] as string;
  };

  return (
    <>
      {company ? (
        <section className="section-banner">
          <div className="container">
            <div className="inner">
              <img
                src={`https://bizneskatalog.webclub.uz/images/banner/${company.banner_image}`}
                alt=""
              />
              <div className="banner-inner">
                <h3 className="title">{getBannerTitle(i18n.language)}</h3>
                <Link to={"about"}>{t("button.more-btn")}</Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h1>No Company</h1>
      )}
    </>
  );
};

export default Banner;
