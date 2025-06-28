import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/i18_en.json";
import hi from "./locales/hi/i18_hi.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
    },
    detection: {
      caches: ["localStorage"],
    },
    fallbackLng: "en",
  });

export default i18n;
