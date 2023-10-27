
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "KASIA BELL",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { name: "KASIA BELL", content: "Personal website" }
      ],
    },
  },
  devtools: {enabled: false},
  ssr: false,
  modules: [
    "@pinia/nuxt",
    "vue3-carousel-nuxt",
    "@nuxtjs/eslint-module",
  ],
  pinia: {
    autoImports: ["defineStore"]
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
