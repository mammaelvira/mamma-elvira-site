// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    // https://github.com/harlan-zw/nuxt-seo-kit
    "nuxt-seo-kit",
  ],

  modules: [
    // https://uno.antfu.me/?s=guide:Setup+Nuxt
    "@unocss/nuxt",

    // https://vueuse.org/
    "@vueuse/nuxt",

    // https://nuxt-typed-router.vercel.app/
    "nuxt-typed-router",

    "@nuxtjs/i18n",
  ],

  // https://i18n.nuxtjs.org/options-reference
  i18n: {
    /* module options */
  },

  runtimeConfig: {
    public: {
      // SEO
      // https://github.com/harlan-zw/nuxt-seo-kit
      siteUrl: "https://mammaelvira.com",
      siteName: "Mamma Elvira",
      siteDescription: "",
      language: "",
      titleSeparator: " • ",
    },
  },
});
