// nuxt.config.ts
export default defineNuxtConfig({
  // Menjalankan Nuxt dalam mode SPA
  ssr: false,

  app: {
    head: {
      title: 'My Nuxt 3 App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'My awesome Nuxt 3 project' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: [
    // Tambahkan file CSS atau Tailwind CSS
    '~/assets/css/tailwind.css',
  ],

  modules: [
    '@nuxtjs/tailwindcss', // Pastikan Tailwind telah diinstal
  ],

  runtimeConfig: {
    public: {
      baseURL: 'http://backer-backend.buildwithangga.id',
    },
  },

  build: {},
  compatibilityDate: '2024-11-06',
})