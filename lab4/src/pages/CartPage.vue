<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "../stores/cart";
import { useI18n } from "vue-i18n";

const cart = useCartStore();
const { items, totalCount, totalPrice } = storeToRefs(cart);
const { t } = useI18n();
</script>

<template>
  <h1>{{ t("cart.title") }}</h1>

  <div v-for="i in items" :key="i.id">
    {{ i.title }} × {{ i.qty }} = {{ i.price * i.qty }}
    <button @click="cart.remove(i.id)">X</button>
  </div>

  <p>{{ t("cart.total") }}: {{ totalPrice }}</p>
  <button @click="cart.clear">{{ t("cart.clear") }}</button>
</template>
