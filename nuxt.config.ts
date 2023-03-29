import transformerDirectives from '@unocss/transformer-directives'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    // https://github.com/harlan-zw/nuxt-seo-kit
    'nuxt-seo-kit',
  ],

  modules: [
    // https://uno.antfu.me/?s=guide:Setup+Nuxt
    '@unocss/nuxt',

    // https://vueuse.org/
    '@vueuse/nuxt',

    // https://nuxt-typed-router.vercel.app/
    'nuxt-typed-router',

    '@nuxtjs/i18n',
  ],

  css: [
    // RESET file
    // https://github.com/unocss/unocss/tree/main/packages/reset
    '@/assets/css/reset-tailwind-compat.css',

    '@/assets/css/fonts.css',
    '@/assets/css/main.css',
    '@/assets/css/style.css',
  ],

  // https://github.com/unocss/unocss/tree/main/packages/nuxt
  unocss: {
    transformers: [transformerDirectives()],

    theme: {
      colors: {
        // mamma-elvira colors
        me: {
          stone: '#eae3d8',
          peach: '#ec7850',
          orange: '#ea5436',
          red: '#C02D18',
          pink: '#ee8da8',
          ink: '#372c43',
          lapis: '#3f689d',
          cyan: '#668e98',
          green: '#107652',
          mint: '#4FB692',
        },
      },
    },

    shortcuts: [],
    rules: [],

    icons: true,
  },

  // https://i18n.nuxtjs.org/options-reference
  i18n: {
    /* module options */
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'it',
    locales: [
      { code: 'it', name: 'italiano', file: 'it-IT.json' },
      { code: 'en', name: 'english', file: 'en-US.json' },
    ],
    // https://v8.i18n.nuxtjs.org/guide/browser-language-detection
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },

  runtimeConfig: {
    public: {
      // SEO
      // https://github.com/harlan-zw/nuxt-seo-kit
      siteUrl: 'https://mammaelvira.com',
      siteName: 'Mamma Elvira',
      siteDescription: '',
      language: '',
      titleSeparator: ' • ',
    },
  },
})
