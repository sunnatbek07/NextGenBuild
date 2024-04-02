import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ruTranslation from "./locales/ru.json";
import uzTranslation from "./locales/uz.json";
import engTranslation from "./locales/eng.json";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18next
    .use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            uz: { translation: uzTranslation },
            rus: { translation: ruTranslation },
            eng: { translation: engTranslation }
        },
        fallbackLng: "uz",
        interpolation: { escapeValue: false },
    });


export default i18next;