import { useAppSelector } from "@/store/hooks/hooks";
import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const company = useAppSelector((state) => state.company.company);
  const { i18n } = useTranslation();

  return (
    <>
      <h1>About</h1>
      <img src={company.logo} alt="" />
      <p
        dangerouslySetInnerHTML={{
          __html: company[`description_${i18n.language}` as keyof ICompany],
        }}
      />
    </>
  );
};

export default About;
