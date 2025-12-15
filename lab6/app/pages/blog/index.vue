<script setup lang="ts">
const { data: posts, status } = await useFetch('/api/posts')

useSeoMeta({
  title: 'Blog - Nuxt Course Blog',
  description: 'Read the latest updates and tutorials.'
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Blog Posts</h1>
    
    <div v-if="status === 'pending'" class="space-y-4">
      <USkeleton class="h-32 w-full" v-for="i in 3" :key="i" />
    </div>

    <div v-else-if="posts" class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <UCard v-for="post in posts" :key="post.id" class="flex flex-col h-full">
        <template #header>
          <div class="font-bold text-lg truncate">{{ post.title }}</div>
        </template>
        <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{{ post.desc }}</p>
        <template #footer>
          <UButton :to="`/blog/${post.slug}`" block variant="soft">
            Read Article
          </UButton>
        </template>
      </UCard>
    </div>
  </div>
</template>
