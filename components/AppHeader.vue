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
    :class="headerStore.isTransparent ? 'transparent' : 'white-background'"
  >
    <router-link to="/">
      <div
        :class="isRootPath && !hamburgerStore.isOpen? 'invert' : '' "
        class="header page-margin"
        @click="headerClick"
      >
        <p v-if="!hamburgerStore.isOpen" id="kasia" class="header__kasia">
          KASIA BELL
        </p>
        <p v-if="!hamburgerStore.isOpen" id="production-design" class="header__production-design">
          Production Design & Set Decoration
        </p>
      </div>
    </router-link>
    <div class="header">
      <Hamburger
        :invert-header="isRootPath && !hamburgerStore.isOpen && headerStore.isTransparent"
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
  height: min-content
  width: 100%
  display: flex
  flex-direction: row
  justify-content: space-between


.transparent
  background-color: transparent


#kasia
  font-family: Raleway, serif
  letter-spacing: 4px
  font-size: 1.58rem

#production-design
  font-family: "Minion-Pro-Medium", serif !important
  font-size: 1rem

.header
  z-index: 123

  &__kasia
    line-height: 1.3rem

  &__production-design
    padding-top: 8px


</style>
