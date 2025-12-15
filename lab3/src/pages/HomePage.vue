<script setup>
import { ref } from "vue";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard.vue";
import AdSlot from "../components/AdSlot.vue";
import AdModal from "../components/AdModal.vue";

const list = ref(articles);

const modalOpen = ref(false);
function openAd() {
  modalOpen.value = true;
}
function closeAd() {
  modalOpen.value = false;
}
</script>

<template>
  <section class="hero">
    <h1 class="h">Головні новини</h1>
    <p class="p">
      Міні-сайт новин на Vue 3: сторінки, стилі, анімації, Teleport і тема.
    </p>
  </section>

  <AdSlot
    title="Реклама на головній"
    subtitle="Натисни — відкриється модалка (Teleport)"
    bannerText="🎁 Bonus"
    @open="openAd"
  />

  <div class="divider" />

  <section class="grid">
    <ArticleCard v-for="a in list" :key="a.id" :item="a" />
  </section>

  <AdModal
    :open="modalOpen"
    headline="Акція дня"
    text="Демонстраційна реклама. Модалка показується через Teleport + Transition."
    image="https://picsum.photos/seed/homead/900/420"
    @close="closeAd"
  />
</template>

<style scoped>
.hero {
  padding: 10px 0 16px;
}
.h {
  margin: 0;
  font-size: 30px;
  font-weight: 1000;
}
.p {
  margin: 8px 0 0;
  color: var(--muted);
  line-height: 1.6;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

@media (max-width: 980px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
