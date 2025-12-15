export default defineEventHandler((event) => {
    const slug = getRouterParam(event, 'slug')
    const posts = [
        { id: 1, title: 'Getting Started with Nuxt 4', slug: 'getting-started', body: 'Nuxt 4 simplifies the directory structure using the app/ folder. It is faster and more flexible.' },
        { id: 2, title: 'Vue Composition API', slug: 'vue-composition', body: 'Composition API makes code reuse easier through composables. It organizes logic by feature rather than option type.' },
        { id: 3, title: 'Server Side Rendering', slug: 'ssr-explained', body: 'SSR improves SEO and perceived performance. Nuxt handles hydration automatically on the client side.' }
    ]
    const post = posts.find(p => p.slug === slug)
    if (!post) {
        throw createError({ statusCode: 404, statusMessage: 'Post not found' })
    }
    return post
})
