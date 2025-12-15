export default defineEventHandler((event) => {
    return [
        { id: 1, title: 'Getting Started with Nuxt 4', slug: 'getting-started', desc: 'Learn how to set up a new Nuxt 4 project.' },
        { id: 2, title: 'Vue Composition API', slug: 'vue-composition', desc: 'Why Composition API is the future of Vue.' },
        { id: 3, title: 'Server Side Rendering', slug: 'ssr-explained', desc: 'Understanding hydration and SSR in Nuxt.' }
    ]
})
