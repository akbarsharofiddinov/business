import i18next from "i18next";

import { initReactI18next } from "react-i18next";

import translationRU from "./locales/ru/translation.json";
import translationUZ from "./locales/uz/translation.json";
import translationKR from "./locales/kr/translate.json";

const resources = {
  ru: { translation: translationRU },
  uz: { translation: translationUZ },
  kr: { translation: translationKR },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "uz",
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
