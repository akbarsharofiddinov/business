import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  current: string;
  list: string[];
  afterIcon?: React.ReactNode;
  beforeIcon?: React.ReactNode;
}

const MySelect: React.FC<IProps> = ({
  current,
  list,
  beforeIcon,
  afterIcon,
}) => {
  const [openMenu, setOpenMenu] = useState(false);

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
        <div className="selected" onClick={() => setOpenMenu((prev) => !prev)}>
          <span>{beforeIcon && beforeIcon}</span>
          <h3 className="select-title">{current}</h3>
          <span className={openMenu ? "rotate" : ""}>
            {afterIcon && afterIcon}
          </span>
        </div>
        <ul className={openMenu ? "menu active" : "menu"}>
          {list.map((lang, index) => (
            <li
              key={index}
              className={lang === i18n.language ? "disable" : ""}
              onClick={() => {
                changeLanguage(lang);
                setOpenMenu(false);
              }}
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
