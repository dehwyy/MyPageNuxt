// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {},
  app: {
    head: {
      title: 'Nuxt app',
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  srcDir: './src',
})
