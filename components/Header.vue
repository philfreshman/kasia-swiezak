<script lang="ts" setup>
import Modal from "./Modal.vue"
import Hamburger from "./Hamburger.vue"
import { useHeaderStore } from "~/stores/header"

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
    :class="headerStore.isTransparent ? 'bg-transparent' : 'bg-white md:bg-transparent' "
  >
    <router-link to="/">
      <div
        :class="isRootPath && !hamburgerStore.isOpen? 'invert' : '' "
        class="m-[var(--page-margin-sm)] md:m-[var(--page-margin-md)] lg:m-[var(--page-margin-lg)]"
        @click="headerClick"
      >
        <p v-if="!hamburgerStore.isOpen" id="kasia" class="leading-[1.4em]">
          KASIA BELL
        </p>
        <p v-if="!hamburgerStore.isOpen" id="production-design" class="pt-1">
          Production Design & Set Decoration
        </p>
      </div>
    </router-link>
    <div class="m-[var(--page-margin-sm)] md:m-[var(--page-margin-md)] lg:m-[var(--page-margin-lg)]">
      <Hamburger
        :invert-header="isRootPath && !hamburgerStore.isOpen && headerStore.isTransparent"
        class="m-50"
        @click="handleHamburgerClick"
      />
    </div>
  </div>
  <Modal :open="hamburgerStore.isOpen" @close-modal="closeModal" />
</template>

<style lang="sass" scoped>

#header
  z-index: 123
  top: 0
  float: left
  position: fixed
  width: 100%
  display: flex
  flex-direction: row
  justify-content: space-between


#kasia
  letter-spacing: 4px
  font-size: 1.58rem


#production-design
  font-size: 1rem


</style>
