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

    // https://sanity.nuxtjs.org/
    '@nuxtjs/sanity',

    // https://html-validator.nuxtjs.org/
    '@nuxtjs/html-validator',

    // https://nuxtseo.com/sitemap/getting-started/installation
    'nuxt-simple-sitemap',

    // https://nuxtseo.com/robots/getting-started/installation
    'nuxt-simple-robots',
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
      // SEO
      // https://github.com/harlan-zw/nuxt-seo-kit
      siteUrl: 'https://mammaelvira.com',
      siteName: 'Mamma Elvira',
      siteDescription: 'Esperienze del Territorio, a Lecce dal 2011',
      titleSeparator: ' • ',

      // Sanity
      sanity: {
        projectId: 'yke6f6fh',
      },
    },
  },

  // https://i18n.nuxtjs.org/options-reference
  i18n: {
    /* module options */

    baseUrl: 'https://mammaelvira.com',

    lazy: true,
    langDir: 'locales',
    defaultLocale: 'it',
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
    },
  },

  site: {
    url: 'https://mammaelvira.com', // for sitemap generation and robot.txt
  },

  htmlValidator: {
    usePrettier: false,
    options: { rules: { 'no-autoplay': 'off', 'long-title': 'warn' } },
  },

  devtools: {
    enabled: true,
  },
})
