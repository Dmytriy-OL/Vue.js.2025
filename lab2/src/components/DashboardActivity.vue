<script setup>
import { onActivated, onDeactivated } from "vue";

onActivated(() => console.log("Activity activated"));
onDeactivated(() => console.log("Activity deactivated"));
</script>

<template>
  <p>Activity tab</p>
</template>
