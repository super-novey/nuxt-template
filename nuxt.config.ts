// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n'
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  colorMode: {
    classSuffix: "",       // makes html have class="dark" instead of dark-mode
    preference: "system",  // default = system theme
    fallback: "light"
  },

  i18n: {
    // default locale
    defaultLocale: 'en',

    // available locales
    locales: [
      {
        code: 'en',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'vi',
        file: 'vi.json',
        name: 'Tiếng Việt'
      }
    ],


    strategy: 'prefix_except_default',

    vueI18n: './i18n.config.ts'
  }
})
