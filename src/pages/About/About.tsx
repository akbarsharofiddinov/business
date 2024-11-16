import { useAppSelector } from "@/store/hooks/hooks";
import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const company = useAppSelector((state) => state.company.company);

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="about-page">
        <div className="container">
          <div className="inner">
            <img
              src={`https://bizneskatalog.webclub.uz/images/company-logo/${company.logo}`}
              alt="logo image"
            />

            <div className="info">
              <p>
                {t("company-name")}: {company.name}
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    company[`description_${i18n.language}` as keyof ICompany],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
