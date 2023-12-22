<script lang="ts" setup>
import { useHamburgerStore } from "~/stores/hamburger"
import { onMounted } from "vue"

const props = defineProps({
  invertHeader: { type: Boolean, required: true },
  static: { type: Boolean, required: false },
})

const hamburgerStore = useHamburgerStore()
hamburgerStore.flipState()

const hamburgerClick = (e: Event) => {
  // document.getElementById("bar")?.classList.remove("hover")

  if (props.static) e.preventDefault()
}

const addHover = () => document.getElementById("newHam")?.classList.add("glow")
const removeHover = () =>
  document.getElementById("newHam")?.classList.remove("glow")

onMounted(() => {
  if (hamburgerStore.isOpen) {
    setTimeout(() => {
      hamburgerStore.setClose()
    })
  }
})
</script>

<template>
  <div :class="props.invertHeader ? 'invert' : ''">
    <input
      :checked="hamburgerStore.isOpen"
      class="toggle"
      type="checkbox"
      @click="hamburgerClick"
    />
    <div class="hamburger" @mouseenter="addHover" @mouseleave="removeHover">
      <span v-if="!hamburgerStore.isOpen">
        <svg
          id="newHam"
          fill="none"
          height="40"
          viewBox="0 0 33 33"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M25.3158 13.5617H8.1377" stroke="rgba(0, 0, 0, 0.75)" />
          <path d="M25.3158 19.4384H8.1377" stroke="rgba(0, 0, 0, 0.75)" />
          <circle cx="16.5" cy="16.5" r="16" stroke="rgba(0, 0, 0, 0.75)" />
        </svg>
      </span>
      <span v-else @mouseenter="addHover" @mouseleave="removeHover">
        <svg
          id="newHam"
          fill="none"
          height="40"
          viewBox="0 0 33 33"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.1467 10L10 22.1467" stroke="rgba(0, 0, 0, 0.75)" />
          <path d="M22.1467 22.2935L10 10.1467" stroke="rgba(0, 0, 0, 0.75)" />
          <circle cx="16.5" cy="16.5" r="16" stroke="rgba(0, 0, 0, 0.75)" />
        </svg>
      </span>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.glow
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25))

  path
    stroke: black

  circle
    stroke: black

.toggle
  background-color: green
  z-index: 12
  position: absolute
  top: 0
  right: 0
  cursor: pointer
  opacity: 0

.hamburger
  z-index: 12

  &:hover
    cursor: pointer
</style>
