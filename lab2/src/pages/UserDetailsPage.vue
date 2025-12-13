<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <h2>Деталі користувача</h2>
  <p>ID користувача: {{ route.params.id }}</p>
</template>
