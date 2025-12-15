<template>
  <section class="box">
    <h1>404</h1>
    <p>Сторінку не знайдено</p>
    <RouterLink class="btn" to="/">На головну</RouterLink>
  </section>
</template>

<style scoped>
.box {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--card);
  padding: 18px;
  box-shadow: var(--shadow);
}
p {
  color: var(--muted);
}
</style>
