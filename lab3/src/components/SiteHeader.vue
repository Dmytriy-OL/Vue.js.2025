<script setup>
import ThemeToggle from "./ThemeToggle.vue";

defineProps({
  theme: { type: String, required: true },
});

defineEmits(["toggleTheme"]);
</script>

<template>
  <header class="header">
    <div class="container row">
      <div class="brand">
        <div class="logo">N</div>
        <div>
          <div class="title">NewsMini</div>
          <div class="subtitle">Vue.js News</div>
        </div>
      </div>

      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

      <ThemeToggle :theme="theme" @toggle="$emit('toggleTheme')" />
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: color-mix(in oklab, var(--bg), transparent 10%);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(10px);
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  gap: 14px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-weight: 900;
  background: var(--accent);
  color: white;
}

.title {
  font-weight: 900;
  letter-spacing: 0.2px;
}
.subtitle {
  font-size: 12px;
  color: var(--muted);
}

.nav {
  display: flex;
  gap: 14px;
  color: var(--muted);
}
.nav a {
  padding: 8px 10px;
  border-radius: 10px;
}
.nav a:hover {
  background: color-mix(in oklab, var(--card), transparent 30%);
  color: var(--text);
}
</style>
