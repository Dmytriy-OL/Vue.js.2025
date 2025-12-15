<script setup lang="ts">
useSeoMeta({
  title: 'About - Nuxt Course Blog',
  description: 'Information about the author and course.'
})
</script>

<template>
  <UCard>
    <template #header>
      <h1 class="text-2xl font-bold">About This Course</h1>
    </template>
    <p class="mb-4">
      This laboratory work is part of the Advanced Frontend Development course.
      We are learning Nuxt.js, Server Side Rendering, and modern UI libraries.
    </p>
    <div class="flex gap-2">
      <UBadge color="green" variant="subtle">Nuxt 4</UBadge>
      <UBadge color="blue" variant="subtle">Vue 3</UBadge>
      <UBadge color="orange" variant="subtle">Nitro</UBadge>
    </div>
  </UCard>
</template>
