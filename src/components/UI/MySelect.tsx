import React from "react";
import { useTranslation } from "react-i18next";
import { CiGlobe } from "react-icons/ci";

interface IProps {
  current: string;
  list: string[];
}

const MySelect: React.FC<IProps> = ({ current, list }) => {
  const { i18n } = useTranslation();

  const languageNames: Record<string, string> = {
    ru: "Русский",
    uz: "O'zbekcha",
    kr: "Qaraqalpaqsha",
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="select-item">
        <div className="selected">
          <span>
            <CiGlobe />
          </span>
          <h3 className="title">{current}</h3>
        </div>
        <ul className="menu">
          {list.map((lang, index) => (
            <li
              key={index}
              className={lang === i18n.language ? "disable" : ""}
              onClick={() => changeLanguage(lang)}
            >
              {languageNames[lang]}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MySelect;
