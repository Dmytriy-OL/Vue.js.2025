import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ua from "./locales/ua.json";

const i18n = createI18n({
  legacy: false,
  locale: "ua",
  fallbackLocale: "en",
  messages: { en, ua },
  modifiers: {
    upper: (v) => v.toUpperCase(),
    lower: (v) => v.toLowerCase(),
    cap: (v) => v.charAt(0).toUpperCase() + v.slice(1),
    shout: (v) => `${v.toUpperCase()}!!!`
  }
});

export default i18n;
