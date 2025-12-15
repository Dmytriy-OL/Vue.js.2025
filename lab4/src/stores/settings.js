import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    locale: "ua"
  }),
  actions: {
    setLocale(lang) {
      this.locale = lang;
    }
  },
  persist: {
    key: "settings-store",
    pick: ["locale"]
  }
});
