// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // https://uno.antfu.me/?s=guide:Setup+Nuxt
    '@unocss/nuxt',

    // https://vueuse.org/
    '@vueuse/nuxt',

    // https://nuxt-typed-router.vercel.app/
    'nuxt-typed-router',

    '@nuxtjs/i18n',

    // https://sanity.nuxtjs.org/
    '@nuxtjs/sanity',

    // https://html-validator.nuxtjs.org/
    '@nuxtjs/html-validator',

    // https://nuxtseo.com/nuxt-seo/
    '@nuxtjs/seo',
  ],

  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/main.css',
    '@/assets/css/style.css',
    '@/assets/css/places.css',
    '@/assets/css/sanity.css', // sanity portable text "block"
  ],

  runtimeConfig: {
    public: {
      // Sanity
      sanity: {
        projectId: 'yke6f6fh',
      },
    },
  },

  // https://i18n.nuxtjs.org/options-reference
  i18n: {
    /* module options */

    defaultLocale: 'it',

    baseUrl: 'https://mammaelvira.com',

    lazy: true,
    langDir: 'locales',
    locales: [
      {
        code: 'it',
        iso: 'it-IT',
        name: 'italiano',
        file: 'it-IT.json',
        isCatchallLocale: true, // This one will be used as catchall locale
      },
      { code: 'en', iso: 'en-US', name: 'english', file: 'en-US.json' },
    ],
    // https://v8.i18n.nuxtjs.org/guide/browser-language-detection
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    customRoutes: 'config',
    pages: {
      'about-us': {
        en: '/about-us',
      }
    }
  },

  app: {
    head: {
      link: [
        // https://realfavicongenerator.net/
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
          media: '(prefers-color-scheme: light)',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon_dark.png',
          media: '(prefers-color-scheme: dark)',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
          media: '(prefers-color-scheme: light)',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
          media: '(prefers-color-scheme: light)',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32_dark.png',
          media: '(prefers-color-scheme: dark)',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16_dark.png',
          media: '(prefers-color-scheme: dark)',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#382d43' },
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#ec7850' },
        { name: 'theme-color', content: '#eae3d8' },
      ],

      // NuxtSEO
      templateParams: {
        separator: '•',
      },
    },
  },

  // SEO
  site: {
    url: 'https://mammaelvira.com', // for sitemap generation and robot.txt
    name: 'Mamma Elvira',
    description: 'Esperienze del Territorio, a Lecce dal 2011',
  },
  schemaOrg: { enabled: true },

  htmlValidator: {
    usePrettier: false,
    failOnError: false,
    options: {
      rules: {
        'no-autoplay': 'off',
        'long-title': 'warn',
        'tel-non-breaking': 'warn',
      },
    },
  },

  devtools: {
    enabled: true,
  },

  // experimental: {
  //   headNext: true, // capo.js <head> tag sorted for better performance
  // },
})
