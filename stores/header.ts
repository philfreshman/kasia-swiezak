import {defineStore} from "pinia"

export const useHeaderStore = defineStore("header", {
  state: () => ({
    transparent: false
  }),

  actions: {
    setTransparent(value: boolean) {
      this.transparent = value
    },
  },
})
