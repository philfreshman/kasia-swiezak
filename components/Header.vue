<script lang="ts" setup>
import Modal from "./Modal.vue"
import Hamburger from "./Hamburger.vue"
import { useHeaderStore } from "~/stores/header"
import HeaderItem from "~/components/HeaderItem.vue"
import useMobile from "~/composables/useMobile"

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

const isMobile = useMobile().isMobile


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
          :class="isMobile ? 'text-[1.90rem] pt-[2px]' : 'text-[1.68rem]'"
          class="tracking-[4px] text-shadow leading-[80%]"
        >
          KASIA BELL
        </p>
        <p v-if="!isMobile && !hamburgerStore.isOpen" id="production-design" class="pt-1 text-shadow">
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


<style lang="css">
.text-shadow {
  text-shadow: 0px 0px 10px #ffffff;
}
</style>
