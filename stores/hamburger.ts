import { defineStore } from "pinia"


function handleScrollLock(open: boolean) {
  const body = document.getElementsByTagName("body")[0]
  if (open) {
    body.classList.add("no-scroll")
  } else {
    body.classList.remove("no-scroll")
  }
}

export const useHamburgerStore = defineStore("hamburger", {
  state: () => ({
    isOpen: false,
  }),

  actions: {
    setOpen() {
      this.isOpen = true
      handleScrollLock(this.isOpen)
    },
    setClose() {
      this.isOpen = false
      handleScrollLock(this.isOpen)
    },
    flipState() {
      this.isOpen = !this.isOpen
      handleScrollLock(this.isOpen)
    },
  },
  persist: true,
})
