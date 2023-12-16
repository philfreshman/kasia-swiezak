<script lang="ts" setup>
import Modal from "./Modal.vue"
import Hamburger from "./Hamburger.vue"
import { useHeaderStore } from "~/stores/header"
import HeaderItem from "~/components/HeaderItem.vue"

const hamburgerStore = useHamburgerStore()
const headerStore = useHeaderStore()
const isRootPath = window.location.pathname === "/"

onMounted(() => {
  document.addEventListener("keyup", closeOnEsc)
})

const handleHamburgerClick = () => hamburgerStore.flipState()
const headerClick = () => hamburgerStore.setClose()
const closeModal = () => hamburgerStore.setClose()
const closeOnEsc = (event: KeyboardEvent) => {
  if (event.key === "Escape" && hamburgerStore.isOpen === true)
    hamburgerStore.setClose()
}

</script>


<template>
  <div
    id="header"
    :class="headerStore.isTransparent ? 'absolute' : 'bg-white'"
    class="z-20 top-0 w-full flex row justify-between overflow-hidden 2xl:absolute 2xl:bg-transparent"
  >
    <router-link to="/">
      <HeaderItem
        :class="isRootPath && !hamburgerStore.isOpen? 'invert' : '' "
        @click="headerClick"
      >
        <p v-if="!hamburgerStore.isOpen" id="kasia" class="leading-[1.4em] tracking-[4px]">
          KASIA BELL
        </p>
        <p v-if="!hamburgerStore.isOpen" id="production-design" class="pt-1">
          Production Design & Set Decoration
        </p>
      </HeaderItem>
    </router-link>
    <HeaderItem>
      <Hamburger
        :invert-header="isRootPath && !hamburgerStore.isOpen && headerStore.isTransparent"
        @click="handleHamburgerClick"
      />
    </HeaderItem>
  </div>
  <Modal :open="hamburgerStore.isOpen" @close-modal="closeModal" />
</template>

