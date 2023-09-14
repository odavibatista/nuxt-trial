// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:  {
    head: {
      title: "Daniels' Steaks",
      meta: [
        { name: 'informations', content: 'Testing Nuxt 3'}
      ],
      link: [
        { rel: 'stylesheet', href: ''}
      ]
    }
  }
})
