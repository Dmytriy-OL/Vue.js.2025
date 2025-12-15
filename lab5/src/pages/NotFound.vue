<script setup>
</script>

<template>
  <section class="not-found">
    <h1>404</h1>
    <p>Сторінку не знайдено</p>
    <RouterLink to="/">Повернутися на головну</RouterLink>
  </section>
</template>

<style scoped>
.not-found {
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
}

.not-found h1 {
  font-size: 64px;
}

.not-found a {
  color: #3b82f6;
  text-decoration: underline;
}
</style>
