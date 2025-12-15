<script setup>
import { useProductsStore } from "../stores/products";
import { useCartStore } from "../stores/cart";

const products = useProductsStore();
const cart = useCartStore();
</script>

<template>
  <h1>Products</h1>

  <div v-for="p in products.list" :key="p.id">
    {{ p.title }} — {{ p.price }}
    <button @click="cart.add(p)">+</button>
  </div>
</template>
