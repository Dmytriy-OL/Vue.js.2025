export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  site: {
    url: 'http://localhost:3000',
    name: 'Nuxt Course Blog'
  }
})
