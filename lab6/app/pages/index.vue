<script setup lang="ts">
useSeoMeta({
  title: 'Home - Nuxt Course Blog',
  description: 'Welcome to the lab 6 demonstration project.'
})
</script>

<template>
  <div class="space-y-6">
    <UCard>
      <template #header>
        <h1 class="text-2xl font-bold">Welcome to Nuxt 4 Lab</h1>
      </template>
      <p class="mb-4">
        This project demonstrates:
      </p>
      <ul class="list-disc pl-5 space-y-1 mb-4">
        <li>Nuxt 4 Directory Structure (app/)</li>
        <li>Server Routes (Nitro)</li>
        <li>Nuxt UI Components</li>
        <li>SEO & Sitemap generation</li>
      </ul>
      <UButton to="/blog" color="primary" icon="i-heroicons-book-open">
        Browse Articles
      </UButton>
    </UCard>
  </div>
</template>
