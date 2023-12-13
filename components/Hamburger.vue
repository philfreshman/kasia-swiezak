<script lang="ts" setup>
import { useHamburgerStore } from "~/stores/hamburger"
import { onMounted } from "vue"

const props = defineProps({
  invertHeader: { type: Boolean, required: true },
  static: { type: Boolean, required: false },
})

const hamburgerStore = useHamburgerStore()
hamburgerStore.flipState()


function click(e: Event) {
  document.getElementById("bar")?.classList.remove("hover")

  if (props.static)
    e.preventDefault()
}


// function hover() {
//   document.getElementById("bar")?.classList.toggle("glow-outer")
//
// if (!hamburgerStore.$state.isOpen) {
//   console.log("glow")
//   document.getElementById("bar")?.classList.toggle("glow-inner")
// } else {
//   // document.getElementById("bar")?.classList.remove("glow-inner")
// }
// }


onMounted(() => {
  if (hamburgerStore.isOpen) {
    setTimeout(() => {
      hamburgerStore.setClose()
    })
  }
})


</script>

<template>
  <div :class="props.invertHeader ? 'invert' : '' ">
    <input :checked="hamburgerStore.isOpen" class="toggle" type="checkbox"
           @click="click" />
    <div class="hamburger">
      <span v-if="!hamburgerStore.isOpen">
        <svg fill="none" height="40" viewBox="0 0 33 33" width="40" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.3158 13.5617H8.1377" stroke="black" />
          <path d="M25.3158 19.4384H8.1377" stroke="black" />
          <circle cx="16.5" cy="16.5" r="16" stroke="black" />
        </svg>
      </span>
      <span v-else>
        <svg fill="none" height="40" viewBox="0 0 33 33" width="40" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.1467 10L10 22.1467" stroke="black" />
          <path d="M22.1467 22.2935L10 10.1467" stroke="black" />
          <circle cx="16.5" cy="16.5" r="16" stroke="black" />
        </svg>
      </span>
    </div>
    <!--    <div class="hamburger" @mouseenter="hover" @mouseleave="hover">-->
    <!--      <div id="bar"></div>-->
    <!--    </div>-->
  </div>
</template>

<style lang="sass" scoped>
//$hamburger-height: 25px
//$hamburger-width: 35px


// ORIGINAL
//.toggle
//  margin: $header-margin
//  z-index: 12
//  height: $hamburger-height + 10px
//  width: $hamburger-width + 10px
//  position: absolute
//  top: 0
//  right: 0
//  cursor: pointer
//  opacity: 0

.toggle
  background-color: green
  z-index: 12
  //height: $hamburger-height + 10px
  //width: $hamburger-width + 10px
  position: absolute
  top: 0
  right: 0
  cursor: pointer
  opacity: 0

//.hamburger
//  z-index: 12
//  position: absolute
//  top: 0
//  right: 0
//  transition: 0s
//
//  display: flex
//  align-items: center
//  justify-content: center
//
//  &:hover
//    cursor: pointer


/* CREATING THE MIDDLE LINE OF THE HAMBURGER :

//.hamburger > div:first-of-type

//.hamburger > div
//  position: relative
//  top: 0
//  right: 0
//  background: $black-transparent
//  height: 1.5px
//  width: 85%
//  transition: all 0s ease
//
//  &::before
//    content: ''
//    position: absolute
//    top: -13px
//    background: $black-transparent
//    width: 100%
//    height: 1.5px
//    transition: all 0.3s ease
//
//  &::after
//    content: ''
//    position: absolute
//    background: $black-transparent
//    width: 100%
//    height: 1.5px
//    transition: all 0.3s ease
//    top: 13px


//.toggle:checked + .hamburger > div
//  background: rgba(0, 0, 0, 0)
//  visibility: hidden
//
//  &::before
//    top: 0
//    visibility: visible
//    transform: rotate(45deg)
//    background: $black-transparent
//
//  &::after
//    top: 0
//    visibility: visible
//    transform: rotate(135deg)
//    background: $black-transparent


//.glow-outer::before, .glow-outer::after, .glow-outer
//  background: black !important


</style>
