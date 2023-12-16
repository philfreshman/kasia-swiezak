// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // devServer: {
  //   host: "0.0.0.0",
  //   port: 3000,
  // },
  app: {
    head: {
      title: "KASIA BELL",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "description", content: "Kasia Bell personal website" },
        { name: "keywords", content: "production design, set decoration, film, movies, design, art, berlin" },
      ],
    },
  },
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "vue3-carousel-nuxt",
    "@nuxtjs/eslint-module",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  piniaPersistedstate: {
    storage: "localStorage",
  },
  carousel: {
    prefix: "Nuxt",
  },
  css: ["@/assets/styles/fonts.sass", "@/assets/styles/main.sass"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
