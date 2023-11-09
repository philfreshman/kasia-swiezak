<script setup lang="ts">

import Modal from "./Modal.vue"
import Hamburger from "./Hamburger.vue"
import {onMounted, ref} from "vue"
import {useHeaderStore} from "~/stores/header"

const { $eventBus } = useNuxtApp()
const isModalOpen = ref(false)
const invertHeader = useHeaderStore().transparent



onMounted(() => {
  document.addEventListener("keyup", closeOnEsc)
})



function openModal() {
  isModalOpen.value = true
  $eventBus.emit("blurBackground", true)
}

function closeModal() {
  isModalOpen.value = false
  $eventBus.emit("blurBackground", false)
}

function closeOnEsc(event: KeyboardEvent) {
  if (event.key === "Escape" && isModalOpen.value === true) {
    isModalOpen.value = false
    $eventBus.emit("blurBackground", false)
  }
}

</script>


<template>
    <div
        id="header"
        :class="invertHeader ? 'transparent' : 'white-background'"
    >
      <router-link to="/">
        <div
            :class="invertHeader ? 'invert' : '' "
            class="header__kasia"
            >
          <p id="kasia">KASIA BELL</p>
          <p id="production-design">Production Design & Set Decoration</p>
        </div>
      </router-link>
      <div class="header__hamburger">
        <Hamburger
            :invert-header="invertHeader"
            :checked="isModalOpen"
            @click="openModal"
        />
      </div>
    </div>
    <Modal :open="isModalOpen" @close-modal="closeModal"/>
</template>

<style scoped lang="sass">

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
  &__kasia
    margin: calc($header-margin - 7px)
    padding-left: 6px
    height: 100%

</style>
