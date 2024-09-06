import antdEnUS from "antd/es/locale/en_US";
import antdFrFR from "antd/es/locale/fr_FR";
import antdJaJP from "antd/es/locale/ja_JP";
import antdZhCn from "antd/es/locale/zh_CN";
import { THEME_CONFIG } from "configs/AppConfig";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en_US.json";
import fr from "./locales/fr_FR.json";
import ja from "./locales/ja_JP.json";
import zh from "./locales/zh_CN.json";

export const resources = {
  en: {
    translation: en,
    antd: antdEnUS,
  },
  zh: {
    translation: zh,
    antd: antdZhCn,
  },
  fr: {
    translation: fr,
    antd: antdFrFR,
  },
  ja: {
    translation: ja,
    antd: antdJaJP,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: THEME_CONFIG.locale,
  lng: THEME_CONFIG.locale,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
