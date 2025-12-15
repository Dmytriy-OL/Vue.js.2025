<script setup>
import { RouterView, RouterLink } from "vue-router";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
</script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/profile">Profile</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/cart">Cart</RouterLink>
    </nav>
    <LanguageSwitcher />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 2rem;
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
}

.nav a.router-link-active {
  color: #42b983;
  font-weight: bold;
}

main {
  padding: 0 1rem;
}
</style>
