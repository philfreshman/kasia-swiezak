<script lang="ts" setup>

const emit = defineEmits(["closeModal"])

defineProps({
  open: Boolean,
})


const close = () => emit("closeModal")

</script>

<template>
  <div v-if="open" @click="close">
    <div
      :class="open ? 'slider__open' : 'slider__closed'"
      class="modal line"
    >
      <div class="links">
        <router-link to="about" @click="close">
          <h1 class="lineUp">ABOUT</h1>
        </router-link>
        <router-link to="filmography" @click="close">
          <h1 class="lineUp">FILMOGRAPHY</h1>
        </router-link>
        <router-link to="contact" @click="close">
          <h1 class="lineUp">CONTACT</h1>
        </router-link>
      </div>

      <div class="legal bottom-margin">
        <router-link class='check' to="legal" @click="close">
          <h1 id="imprint" class="lineUp">Imprint</h1>
        </router-link>
      </div>

    </div>
  </div>
</template>

<style lang="sass" scoped>

#imprint
  font-size: 1.2rem !important

.legal
  position: absolute

  h2
    letter-spacing: 5px
    color: #424242 !important


.modal
  z-index: 12
  width: 100%
  height: 100%
  background-color: white
  //top: $header-height
  float: left
  position: fixed
  top: 0
  right: 0
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center


.links
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  margin-top: -72px

  h1
    width: max-content
    text-shadow: 0 0 1px #838383
    color: black
    display: flex
    justify-content: center
    align-items: center
    padding: 7px
    margin: 20px

  h1:hover
    text-decoration: none
    color: rgba(0, 0, 0, 0.92)
    text-shadow: 0 0 0.5px rgb(0, 0, 0), 0 0 0.5px rgb(0, 0, 0), 0 0 0.5px rgb(0, 0, 0)


.lineUp
  animation: 0.5s anim-lineUp ease-out

@keyframes anim-lineUp
  0%
    opacity: 0
    transform: translateY(15%)


  20%
    opacity: 0.5
    transform: translateY(10%)

  50%
    opacity: 1
    transform: translateY(5%)

  100%
    opacity: 1
    transform: translateY(0%)


</style>
