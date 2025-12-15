<script setup>
import Card from "primevue/card";
import Avatar from "primevue/avatar";

const reviews = [
  { name: "Марія", role: "студентка", text: "Нарешті задачі не губляться. Дуже простий інтерфейс." },
  { name: "Олег", role: "фріланс", text: "Плани адекватні, а калькулятор — взагалі топ." },
  { name: "Іра", role: "PM", text: "Для невеликої команди — саме те. Порядок з дедлайнами." },
];
</script>

<template>
  <section class="section" id="reviews">
    <div class="container">
      <h2 class="section-title">Відгуки</h2>
      <p class="section-subtitle">Короткі реальні (імітаційні) відгуки.</p>

      <div class="grid-3">
        <Card v-for="r in reviews" :key="r.name">
          <template #title>
            <div class="row">
              <Avatar :label="r.name[0]" shape="circle" />
              <div>
                <div class="nm">{{ r.name }}</div>
                <div class="rl">{{ r.role }}</div>
              </div>
            </div>
          </template>
          <template #content>
            <p class="tx">“{{ r.text }}”</p>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.row { display: flex; align-items: center; gap: 10px; }
.nm { font-weight: 900; }
.rl { color: var(--text-color-secondary); font-size: 12px; }
.tx { margin: 0; color: var(--text-color-secondary); line-height: 1.6; }
</style>
