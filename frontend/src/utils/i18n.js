import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import En from './languages/en.json'
import Ru from './languages/ru.json';


let languages = JSON.parse(localStorage.getItem('languages'));

if (!languages) {
   languages = {
       en: {
           translation: En
       },
       ru: {
           translation: Ru
       }
   }
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: languages,
        lng: 'ru',
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

window.languages = languages;
window.currentLanguage = 'en';
