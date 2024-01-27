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
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' },
        { rel: 'icon', type: 'image/x-icon', href: '/icon.png'},
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"}
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'}
      ]
    }
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.API_URL
    }
  }
})
