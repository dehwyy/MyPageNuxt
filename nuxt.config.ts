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
      name: 'dehwyy page',
      short_name: 'dehwyy',
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
  },
  vueTransitions: {},
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'dehwyy',
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap',
        },
      ],
      meta: [
        { name: 'description', content: "dehwyy" },
      ],
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
