// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
  modules: [
    'nuxt-swiper',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@morev/vue-transitions/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [['defineStore', 'definePiniaStore']],
      },
    ],
  ],
  swiper: {},
  pwa: {
    manifest: {
      name: 'Nuxt Vite PWA',
      short_name: 'NuxtVitePWA',
      theme_color: '#ffffff',
    },
    workbox: {
      navigateFallback: '/',
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: false,
      type: 'module',
    },
  },
  imports: {
    imports: [{ name: 'useSwiper', from: 'swiper/vue' }],
  },
  vueTransitions: {},
  app: {
    head: {
      title: 'dehwyy',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap',
        },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nuxtで店' },
      ],
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
  srcDir: 'src/',
  vite: {
    plugins: [svgLoader()],
    test: {
      root: 'src/',
      testNamePattern: new RegExp('.test.ts$'),
    },
  },
})
