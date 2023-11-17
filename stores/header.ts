import {defineStore} from "pinia"

export const useHeaderStore = defineStore("header", {
  state: () => ({
    isTransparent: false,
  }),

  actions: {
    setTransparent(value: boolean) {
      this.isTransparent = value
    },
    flipState(){
      this.isTransparent = !this.isTransparent
    }
  },
})
