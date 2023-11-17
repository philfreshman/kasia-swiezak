<script setup lang="ts">


onMounted(() => {
  replaceArrows()
})


function replaceArrows(){
  const icons = document.getElementsByClassName("carousel__icon")
  for (let i = 0; i < icons.length; i++) {
    icons[i].setAttribute("viewBox", "0 0 39 11")
    const arrow = icons[i].lastChild as HTMLElement
    if (i%2 == 0) {
      arrow.setAttribute("d", "m6.482 10.914.388-.387L2.868 6.008H40v-.68h-37.133l4.132-4.312-.387-.387L1.749 5.621z")
    } else {
      arrow.setAttribute("d", "m33.518.086-.388.387L37.132 4.992H0v.68h37.133l-4.132 4.312.387.387L38.251 5.379z")
    }
  }
}

</script>

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
          id: -3,
          url: "./images/table_room.webp"
        },
        {
          id: -2,
          url: "./images/dachboden.jpeg"
        },
        {
          id: -1,
          url: "./images/zimmer.jpeg"
        },
        {
          id: 0,
          url: "./images/green.jpeg"
        },
        {
          id: 1,
          url: "./images/1.jpeg"
        },
        {
          id: 2,
          url: "./images/2.jpeg"
        },
        {
          id: 3,
          url: "./images/3.jpeg"
        },
        {
          id: 4,
          url: "./images/4.jpeg"
        },
        {
          id: 5,
          url: "./images/5.jpeg"
        },
        {
          id: 6,
          url: "./images/6.jpeg"
        },
        {
          id: 7,
          url: "./images/7.jpeg"
        },
        {
          id: 8,
          url: "./images/8.jpeg"
        },
        {
          id: 9,
          url: "./images/webp_full/2_Wohnzimmer_3.webp"
        },
        {
          id: 10,
          url: "./images/webp_full/5_Loft_3.webp"
        },
        {
          id: 11,
          url: "./images/webp_full/9_Club.webp"
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
    }
  },


  mounted() {
    document.addEventListener("keyup", this.handleArrowKey)
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
