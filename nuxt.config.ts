
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "KASIA BELL",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { name: "description", content: "My awesome site description...." },
        { name: "keywords", content: "production design, set decoration, film, movies, design, art"}
      ],
    },
  },
  devtools: {enabled: false},
  ssr: false,
  modules: [
    "@pinia/nuxt",
    "vue3-carousel-nuxt",
    "@nuxtjs/eslint-module",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  // pinia: {
  //   storesDirs: ["./stores/**"],
  // },
  piniaPersistedstate: {
    storage: "localStorage"
  },
  carousel: {
    prefix: "Nuxt"
  },
  css: ["@/assets/styles/main.sass", "@/assets/styles/fonts.sass"],
  dev: true,
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: "@import '@/assets/styles/variables.sass'\n"
        }
      }
    }
  }
})
