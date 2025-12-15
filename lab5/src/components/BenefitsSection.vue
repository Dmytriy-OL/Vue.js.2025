<script setup>
import Card from "primevue/card";

const benefits = [
  { icon: "pi pi-sitemap", title: "Структура", text: "Проєкти, списки, задачі — все впорядковано." },
  { icon: "pi pi-shield", title: "Надійність", text: "Менше помилок, менше забутих задач." },
  { icon: "pi pi-chart-line", title: "Прогрес", text: "Швидко бачиш, що зроблено, а що горить." },
  { icon: "pi pi-users", title: "Команда", text: "Зручно для 2–10 людей без складних систем." },
  { icon: "pi pi-bolt", title: "Швидко", text: "Мінімум кліків — максимум користі." },
  { icon: "pi pi-cog", title: "Гнучко", text: "Плани і опції під різні задачі." },
];
</script>

<template>
  <section class="section" id="features">
    <div class="container">
      <h2 class="section-title">Переваги</h2>
      <p class="section-subtitle">Чому TaskFlow зручний саме для маленьких команд і студентських проєктів.</p>

      <div class="grid-3">
        <Card v-for="b in benefits" :key="b.title">
          <template #title>
            <div class="t">
              <i :class="b.icon"></i>
              <span>{{ b.title }}</span>
            </div>
          </template>
          <template #content>
            <p class="p">{{ b.text }}</p>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.t { display: flex; align-items: center; gap: 10px; }
.p { margin: 0; color: var(--text-color-secondary); line-height: 1.6; }
</style>
