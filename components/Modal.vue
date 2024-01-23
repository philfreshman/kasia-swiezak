<script lang="ts" setup>
const body = document.getElementsByTagName("body")[0]
onBeforeRouteLeave(() => {
  body.classList.remove("black")
})

const emit = defineEmits(["closeModal"])

defineProps({
  open: Boolean,
})

function close() {
  emit("closeModal")
}
</script>

<template>
  <div v-if="open">
    <div :class="open ? 'slider__open' : 'slider__closed'" class="modal line">
      <div class="modal-link">
        <router-link to="about" @click="close">
          <ModalLink class="lineUp"> ABOUT</ModalLink>
        </router-link>
        <router-link to="filmography" @click="close">
          <ModalLink class="lineUp"> FILMOGRAPHY</ModalLink>
        </router-link>
        <router-link to="contact" @click="close">
          <ModalLink class="lineUp"> CONTACT</ModalLink>
        </router-link>
      </div>

      <!--      <div class="absolute bottom-[var(&#45;&#45;page-margin-lg)]">-->
      <!--        <router-link to="legal" @click="close">-->
      <!--          <h2 class="lineUp text-md sm:text-xl md:text-xl">Imprint</h2>-->
      <!--        </router-link>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<style lang="sass" scoped>

.modal
  z-index: 12
  width: 100%
  height: 100%
  background-color: white
  float: left
  position: fixed
  top: 0
  right: 0
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

.modal-link
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  margin-top: -72px


.lineUp
  animation: 0.45s anim-lineUp ease-out

@keyframes anim-lineUp
  0%
    opacity: 0
    transform: translateY(20%)

  25%
    opacity: 0.25
    transform: translateY(15%)

  50%
    opacity: 0.5
    transform: translateY(7%)


  100%
    opacity: 1
    transform: translateY(0%)
</style>
