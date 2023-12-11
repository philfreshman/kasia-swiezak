<template>
  <NuxtCarousel
      ref="myCarousel"
      :autoplay="6000"
      wrap-around
      touchDrag
  >
    <NuxtSlide v-for="(image) in images" :key="image.id">
      <div
          class="hero-image"
          :style="`background-image: url(${image.url})`"
      />
    </NuxtSlide>

    <template #addons>
      <NuxtNavigation/>
    </template>
  </NuxtCarousel>
</template>

<script lang="ts">
import {defineComponent} from "vue"

type Data = {
  images: HeroImages[]
}

type HeroImages = {
  id: number,
  url: string
}

export default defineComponent({
  name: "Hero",
  data(): Data {
    return {
      images: [
        {
          id: 0,
          url: "./images/new/1_Anselm.jpg"
        },
        {
          id: 1,
          url: "./images/new/table_room.webp"
        },
        {
          id: 2,
          url: "./images/new/2_Schmidt.png"
        },
        {
          id: 3,
          url: "./images/new/2a_AON.png"
        },
        {
          id: 4,
          url: "./images/new/3_das_Quartett.png"
        },
        {
          id: 5,
          url: "./images/new/4_AON-Club.jpg"
        },
        {
          id: 6,
          url: "./images/new/5_Sehsüchte.png"
        },
        {
          id: 7,
          url: "./images/new/6_AON-Konfi.jpg"
        },
        {
          id: 8,
          url: "./images/new/7_Wiedergeburt.jpg"
        },
        {
          id: 9,
          url: "./images/new/8_Hornemann.jpg"
        },
        {
          id: 10,
          url: "./images/new/9_AON-Büro_Melissa.jpg"
        },
        {
          id: 11,
          url: "./images/new/10_Schmidt-Whg_Tekla.png"
        }
      ]
    }
  },

  methods: {
    handleArrowKey(event: KeyboardEvent) {
      switch (event.key) {
      case "ArrowLeft":
        (this.$refs.myCarousel as any).prev()
        break
      case "ArrowRight":
        (this.$refs.myCarousel as any).next()
        break
      }
    },
    replaceArrows() {
      const icons = document.getElementsByClassName("carousel__icon")
      for (let i = 0; i < icons.length; i++) {
        icons[i].setAttribute("viewBox", "0 0 39 11")
        const arrow = icons[i].lastChild as HTMLElement
        if (i % 2 == 0) {
          arrow.setAttribute("d", "m6.482 10.914.388-.387L2.868 6.008H40v-.68h-37.133l4.132-4.312-.387-.387L1.749 5.621z")
        } else {
          arrow.setAttribute("d", "m33.518.086-.388.387L37.132 4.992H0v.68h37.133l-4.132 4.312.387.387L38.251 5.379z")
        }
      }
    }
  },

  mounted() {
    document.addEventListener("keyup", this.handleArrowKey),
    this.replaceArrows()
  }

})
</script>

<style scoped lang="sass">
.carousel
  height: 100vh

  &__viewport
    height: 100% !important


.hero-image
  transition: all
  transition-duration: 1s
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  height: 100vh
  width: 100vw



.header-item__kasia
  color: white !important

.hamburger > div
  background: white !important

  &::before
    background: white !important

  &::after
    background: white !important

</style>
