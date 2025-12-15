<script setup>
import { ref } from "vue";
import AdSlot from "../components/AdSlot.vue";
import AdModal from "../components/AdModal.vue";

const modalOpen = ref(false);
const openAd = () => (modalOpen.value = true);
const closeAd = () => (modalOpen.value = false);
</script>

<template>
  <section class="box">
    <h1 class="h">Про нас</h1>
    <p class="p">
      Це навчальний міні-проєкт для демонстрації стилізації у Vue SFC,
      CSS Modules, переходів між сторінками, Teleport та перемикача теми.
    </p>
  </section>

  <AdSlot
    title="Реклама на About"
    subtitle="Друга статична рекламна зона (вимога ЛР)"
    bannerText="⭐ Promo"
    @open="openAd"
  />

  <AdModal
    :open="modalOpen"
    headline="Промо"
    text="Друга модалка відкривається з іншої сторінки — Teleport працює всюди."
    image="https://picsum.photos/seed/aboutad/900/420"
    @close="closeAd"
  />
</template>

<style scoped>
.box {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--card);
  padding: 16px;
  box-shadow: var(--shadow);
}
.h {
  margin: 0 0 8px;
  font-size: 28px;
  font-weight: 1000;
}
.p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}
</style>
