import i18n, { t } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import English from "./locales/en.json";
import Tamil from "./locales/enTamil.json";

import { useContext } from "react";
import userContext from "../utils/contexts/context";

const strings = (key, defaultValue, options) => {
  return t(key, defaultValue, options);
};

function UserLangGetter(){
  const Data=useContext(userContext)
  Data.userlang ? console.log(Data.userlang) : console.log("Nothing")   
}
  

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: { translation: English },
      enTamil: { translation: Tamil },
    },
  });

export default i18n;

export { strings, UserLangGetter };
