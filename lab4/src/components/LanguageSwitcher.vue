<script setup>
import { useI18n } from "vue-i18n";
import { useSettingsStore } from "../stores/settings";

const { locale } = useI18n();
const settings = useSettingsStore();

function change(lang) {
  locale.value = lang;
  settings.setLocale(lang);
}
</script>

<template>
  <button @click="change('ua')">UA</button>
  <button @click="change('en')">EN</button>
</template>
