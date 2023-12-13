<script lang="ts" setup>

const emit = defineEmits(["closeModal"])

defineProps({
  open: Boolean,
})


function close() {
  emit("closeModal")
}
</script>

<template>
  <div v-if="open" @click="close">
    <div
        :class="open ? 'slider__open' : 'slider__closed'"
        class="modal"
    >
      <div class="links">
        <router-link to="about" @click="close">
          <h2>ABOUT</h2>
        </router-link>
        <router-link to="filmography" @click="close">
          <h2>FILMOGRAPHY</h2>
        </router-link>
        <router-link to="contact" @click="close">
          <h2>CONTACT</h2>
        </router-link>
      </div>

      <div class="legal">
        <router-link class='check' to="legal" @click="close">
          <h2>Imprint</h2>
        </router-link>
      </div>

    </div>
  </div>
</template>

<style lang="sass" scoped>


.legal
  position: absolute
  bottom: $header-margin

  h2
    font-size: 17px
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


.ham-closed
  top: $header-margin
  right: $header-margin

.links
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  margin-top: -72px

  h2
    width: max-content
    font-size: $h2-font-size
    text-shadow: 0 0 1px #838383
    color: black
    display: flex
    justify-content: center
    align-items: center
    padding: 7px
    margin: 20px

  h2:hover
    text-decoration: none
    color: rgba(0, 0, 0, 0.92)
    text-shadow: 0 0 0.5px rgb(0, 0, 0), 0 0 0.5px rgb(0, 0, 0), 0 0 0.5px rgb(0, 0, 0)


</style>
