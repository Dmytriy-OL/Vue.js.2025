<script setup>
const count = defineModel({ default: 0 });
</script>

<template>
  <div>
    <button @click="count--">-</button>
    {{ count }}
    <button @click="count++">+</button>
  </div>
</template>
