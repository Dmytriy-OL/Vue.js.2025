<script setup>
import Toast from "primevue/toast";
import HeaderBar from "./components/HeaderBar.vue";
import FooterBar from "./components/FooterBar.vue";
</script>

<template>
  <Toast />
  <HeaderBar />
  <main>
    <router-view />
  </main>
  <FooterBar />
</template>
