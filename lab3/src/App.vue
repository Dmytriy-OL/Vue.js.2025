<script setup>
import { onMounted, ref, watch } from "vue";
import { RouterView } from "vue-router";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";

const theme = ref("dark");

function applyTheme(next) {
  theme.value = next;
  document.documentElement.setAttribute("data-theme", next);
}

function toggleTheme() {
  applyTheme(theme.value === "dark" ? "light" : "dark");
}

onMounted(() => {
  const stored = localStorage.getItem("theme");
  applyTheme(stored === "light" ? "light" : "dark");
});

watch(theme, (v) => {
  localStorage.setItem("theme", v);
});
</script>

<template>
  <SiteHeader :theme="theme" @toggleTheme="toggleTheme" />

  <main class="container main">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>

  <SiteFooter />
</template>

<style scoped>
.main {
  padding: 22px 0 40px;
}

/* ✅ базові класи переходу сторінок */
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-enter-active {
  transition: all 220ms ease;
}
.page-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.page-leave-active {
  transition: all 180ms ease;
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
