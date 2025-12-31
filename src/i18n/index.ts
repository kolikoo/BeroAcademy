import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// იმპორტები (ჯერ მხოლოდ ჰედერი გვაქვს)
import headerKa from "./ka/header/header.json";
import headerEn from "./en/header/header.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["ka", "en"],

    resources: {
      ka: {
        translation: {
          // აქ ჩაამატებ ხოლმე ახალ გვერდებს
          header: headerKa,
        },
      },

      en: {
        translation: {
          header: headerEn,
        },
      },
    },

    fallbackLng: "en", // თუ ენა ვერ გაიგო, ინგლისური იყოს
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
