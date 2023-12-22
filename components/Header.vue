<script lang="ts" setup>
import Modal from "./Modal.vue"
import Hamburger from "./Hamburger.vue"
import { useHeaderStore } from "~/stores/header"
import HeaderItem from "~/components/HeaderItem.vue"

const hamburgerStore = useHamburgerStore()
const headerStore = useHeaderStore()
const isRootPath = window.location.pathname === "/"
const body = document.getElementsByTagName("body")[0]

onMounted(() => {
  document.addEventListener("keyup", closeOnEsc)
})

const handleHamburgerClick = () => {
  hamburgerStore.flipState()
  if (!hamburgerStore.isOpen && isRootPath) {
    body.classList.add("black")
  } else {
    body.classList.remove("black")
  }
}
// const headerClick = () => hamburgerStore.flipState()
const closeModal = () => {
  hamburgerStore.setClose()
  body.classList.remove("black")
}
const closeOnEsc = (event: KeyboardEvent) => {
  if (event.key === "Escape" && hamburgerStore.isOpen === true)
    hamburgerStore.setClose()
}
</script>

<template>
  <div
    id="header"
    :class="headerStore.isTransparent ? 'absolute' : 'bg-white'"
    class="row top-0 z-20 flex w-full justify-between overflow-hidden 2xl:absolute 2xl:bg-transparent"
  >
    <router-link to="/">
      <HeaderItem :class="isRootPath && !hamburgerStore.isOpen ? 'invert' : ''">
        <p
          v-if="!hamburgerStore.isOpen"
          id="kasia"
          class="leading-[1.4em] tracking-[4px]"
        >
          KASIA BELL
        </p>
        <p v-if="!hamburgerStore.isOpen" id="production-design" class="pt-1">
          Production Design & Set Decoration
        </p>
      </HeaderItem>
    </router-link>
    <HeaderItem>
      <Hamburger
        :invert-header="
          isRootPath && !hamburgerStore.isOpen && headerStore.isTransparent
        "
        @click="handleHamburgerClick"
      />
    </HeaderItem>
  </div>
  <Modal :open="hamburgerStore.isOpen" @close-modal="closeModal" />
</template>
