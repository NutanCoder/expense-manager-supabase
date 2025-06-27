import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/i18_en.json";
import hi from "./locales/hi/i18_hi.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
  },
  fallbackLng: "en",
});

export default i18n;
