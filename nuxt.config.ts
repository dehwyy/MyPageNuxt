// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt app',
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/tailwind.css'],
  srcDir: './src',
})
