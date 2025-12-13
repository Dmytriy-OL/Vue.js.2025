<script setup>
import { provide } from "vue";
import { auth } from "./store/auth";

// provide/inject
provide("auth", auth);
</script>

<template>
  <router-view />
</template>
