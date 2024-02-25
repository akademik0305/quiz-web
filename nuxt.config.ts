// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: 'light'
  },
  modules: [
    '@nuxt/ui', 
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '~/assets/sass/style.sass'
  ],
})
