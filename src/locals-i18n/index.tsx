import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enRes, esRes } from "./translations";

const resources = {
  en: {
    translation: enRes,
  },
  es: {
    translation: esRes,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export const onChangeLanguage: Function = (lngCode: string) => {
  i18n.changeLanguage(lngCode);
};

export default i18n;
