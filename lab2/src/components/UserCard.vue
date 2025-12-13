<script setup>
defineProps({
  user: Object,
});

const emit = defineEmits(["select"]);

function select() {
  emit("select", user);
}
</script>

<template>
  <div>
    {{ user.name }}
    <button @click="select">Обрати</button>
  </div>
</template>
