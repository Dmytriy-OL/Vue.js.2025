<script setup>
import styles from "./ArticleCard.module.css";

defineProps({
  item: { type: Object, required: true },
});
</script>

<template>
  <article :class="styles.card">
    <img :src="item.image" :class="styles.img" alt="cover" />

    <div :class="styles.body">
      <div :class="styles.meta">
        <span>{{ new Date(item.date).toLocaleDateString() }}</span>
        <span :class="styles.dot">•</span>
        <span>News</span>
      </div>

      <h3 :class="styles.title">{{ item.title }}</h3>
      <p :class="styles.excerpt">{{ item.excerpt }}</p>

      <RouterLink class="btn" :to="`/article/${item.id}`">
        Читати повністю
      </RouterLink>
    </div>
  </article>
</template>
