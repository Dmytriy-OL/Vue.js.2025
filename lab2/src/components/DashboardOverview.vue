<script setup>
import { onActivated, onDeactivated } from "vue";

onActivated(() => console.log("Overview activated"));
onDeactivated(() => console.log("Overview deactivated"));
</script>

<template>
  <p>Overview tab</p>
</template>
