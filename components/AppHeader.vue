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


function handleHamburgerClick() {
  hamburgerStore.flipState()
}

function headerClick() {
  hamburgerStore.setClose()
}

function closeModal() {
  hamburgerStore.setClose()
}

function closeOnEsc(event: KeyboardEvent) {
  if (event.key === "Escape" && hamburgerStore.isOpen === true) {
    hamburgerStore.setClose()
  }
}

</script>


<template>
  <div
      id="header"
      :class="headerStore.isTransparent ? 'transparent' : 'white-background'"
  >
    <router-link to="/">
      <div :class="isRootPath && !hamburgerStore.isOpen? 'invert' : '' "
           class="header"
           @click="headerClick"
      >
        <p v-if="!hamburgerStore.isOpen" id="kasia" class="header__kasia">KASIA BELL</p>
        <p v-if="!hamburgerStore.isOpen" id="production-design" class="header__production-design">Production Design &
          Set Decoration</p>
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
  //background: red
  top: 0
  float: left
  position: fixed
  height: $header-height
  width: 100%
  display: flex
  flex-direction: row
  justify-content: space-between


.header
  z-index: 123
  margin: calc($header-margin)

  &__kasia
    line-height: 1.3rem

  &__production-design
    padding-top: 8px


</style>
