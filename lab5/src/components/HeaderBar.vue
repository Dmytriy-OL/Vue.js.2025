<script setup>
import Button from "primevue/button";

defineProps({
  isDark: { type: Boolean, default: false },
});
defineEmits(["toggleTheme"]);

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <div class="brand" @click="scrollTo('home')">
        <span class="logo">TaskFlow</span>
        <span class="tag">SaaS</span>
      </div>

      <nav class="nav">
        <a @click="scrollTo('features')">Переваги</a>
        <a @click="scrollTo('how')">Як працює</a>
        <a @click="scrollTo('pricing')">Тарифи</a>
        <a @click="scrollTo('faq')">FAQ</a>
        <a @click="scrollTo('contact')">Контакти</a>
      </nav>

      <div class="actions">
        <Button
          size="small"
          severity="secondary"
          :icon="isDark ? 'pi pi-moon' : 'pi pi-sun'"
          :label="isDark ? 'Dark' : 'Light'"
          @click="$emit('toggleTheme')"
        />
        <Button size="small" icon="pi pi-arrow-right" label="Отримати демо" @click="scrollTo('contact')" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: color-mix(in srgb, var(--surface-card) 90%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--surface-border);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 66px;
  gap: 14px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.logo {
  font-weight: 900;
  letter-spacing: -0.03em;
  font-size: 18px;
}
.tag {
  font-size: 12px;
  color: var(--text-color-secondary);
  border: 1px solid var(--surface-border);
  padding: 2px 8px;
  border-radius: 999px;
}
.nav {
  display: flex;
  gap: 14px;
  color: var(--text-color-secondary);
}
.nav a {
  cursor: pointer;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
.nav a:hover {
  background: var(--surface-hover);
  color: var(--text-color);
}
.actions {
  display: flex;
  gap: 10px;
}
@media (max-width: 900px) {
  .nav { display: none; }
}
</style>
