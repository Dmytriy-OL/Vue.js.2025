<script setup lang="ts">
const route = useRoute()
const { data: post, error } = await useFetch(() => `/api/posts/${route.params.slug}`)

useSeoMeta({
  title: () => post.value ? post.value.title : 'Post Not Found',
  description: () => post.value ? post.value.body.slice(0, 150) : 'Error'
})
</script>

<template>
  <div>
    <UButton to="/blog" variant="ghost" icon="i-heroicons-arrow-left" class="mb-4">
      Back to Blog
    </UButton>

    <div v-if="post">
      <article class="prose dark:prose-invert max-w-none bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <h1 class="text-4xl font-extrabold mb-6">{{ post.title }}</h1>
        <p class="leading-relaxed text-lg">{{ post.body }}</p>
      </article>
    </div>

    <UAlert
      v-else-if="error"
      icon="i-heroicons-exclamation-triangle"
      title="Article not found"
      description="The article you are looking for does not exist."
      color="red"
      variant="subtle"
    />
  </div>
</template>
