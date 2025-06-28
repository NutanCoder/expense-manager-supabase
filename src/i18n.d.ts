import "react-i18next";
import en from "./locales/en/i18_en.json";

declare module "react-i18next" {
  interface Resources {
    translation: typeof en;
  }
}
