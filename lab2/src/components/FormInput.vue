<script setup>
const model = defineModel();
defineProps({ label: String, type: String });
</script>

<template>
  <label>
    {{ label }}
    <input :type="type" v-model="model" />
  </label>
</template>
