<script setup>
import { computed, ref } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { articles } from "../data/articles";
import AdSlot from "../components/AdSlot.vue";
import AdModal from "../components/AdModal.vue";

const route = useRoute();
const id = computed(() => Number(route.params.id));

const item = computed(() => articles.find((x) => x.id === id.value));

const modalOpen = ref(false);
const openAd = () => (modalOpen.value = true);
const closeAd = () => (modalOpen.value = false);
</script>

<template>
  <div v-if="!item" class="box">
    <h2>Новину не знайдено</h2>
    <RouterLink class="btn" to="/">На головну</RouterLink>
  </div>

  <article v-else class="article">
    <div class="top">
      <h1 class="title">{{ item.title }}</h1>
      <div class="meta">
        {{ new Date(item.date).toLocaleDateString() }}
      </div>
    </div>

    <img class="cover" :src="item.image" alt="cover" />

    <p class="content">
      {{ item.content }}
    </p>

    <div class="divider" />

    <AdSlot
      title="Реклама в статті"
      subtitle="Клік відкриває модалку (Teleport + Transition)"
      bannerText="📣 AD"
      @open="openAd"
    />

    <AdModal
      :open="modalOpen"
      headline="Рекламне повідомлення"
      text="Це модальне вікно зроблено через Teleport to body + Transition."
      image="https://picsum.photos/seed/articlead/900/420"
      @close="closeAd"
    />
  </article>
</template>

<style scoped>
.article {
  display: grid;
  gap: 12px;
}

.top {
  display: grid;
  gap: 6px;
}

.title {
  margin: 0;
  font-size: 28px;
  font-weight: 1000;
}

.meta {
  color: var(--muted);
  font-size: 13px;
}

.cover {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.content {
  color: var(--muted);
  line-height: 1.7;
  white-space: pre-line;
}

.box {
  padding: 18px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--card);
}
</style>
