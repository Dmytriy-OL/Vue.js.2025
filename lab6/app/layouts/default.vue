<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' }
]
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b p-4 flex justify-between items-center bg-gray-50 dark:bg-gray-900">
      <div class="font-bold text-xl">Nuxt Course Blog</div>
      <UHorizontalNavigation :links="links" />
    </header>

    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>

    <footer class="border-t p-4 text-center text-sm text-gray-500">
      &copy; 2025 NuxtJS Labs
    </footer>
  </div>
</template>
