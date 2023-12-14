<script lang="ts" setup>

onMounted(() => {
  document.addEventListener("keyup", handleArrowKey)
  replaceArrows()
})


type HeroImage = {
  id: number
  url: string
}

// https://pixelied.com/convert/png-converter/png-to-webp
// https://pixelied.com/convert/png-converter/png-to-webp
// https://pixelied.com/convert/png-converter/png-to-webp


const carousel = ref()
const images = readonly<HeroImage[]>([
  {
    id: 1,
    url: "./images/new/1_Anselm.webp",
  },
  {
    id: 2,
    url: "./images/new/2_table_room.webp",
  },
  {
    id: 3,
    url: "./images/new/3_Schmidt.png",
  },
  {
    id: 4,
    url: "./images/new/4_AON.png",
  },
  {
    id: 5,
    url: "./images/new/5_das_Quartett.webp",
  },
  {
    id: 6,
    url: "./images/new/6_AON-Club.jpg",
  },
  {
    id: 7,
    url: "./images/new/7_Sehsuchte.webp",
  },
  {
    id: 8,
    url: "./images/new/8_AON-Konfi.jpg",
  },
  {
    id: 9,
    url: "./images/new/9_Wiedergeburt.jpg",
  },
  {
    id: 10,
    url: "./images/new/10_Hornemann.jpg",
  },
  {
    id: 11,
    url: "./images/new/11_Buero_Melissa.jpg",
  },
  {
    id: 12,
    url: "./images/new/12_Schmidt-Whg_Tekla.png",
  }])


const handleArrowKey = (event: KeyboardEvent) => {
  switch (event.key) {
  case "ArrowLeft":
    (carousel.value as any).prev()
    break
  case "ArrowRight":
    (carousel.value as any).next()
    break
  }
}


const replaceArrows = () => {
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

</script>

<template>
  <NuxtCarousel
    ref="carousel"
    :autoplay="6000"
    touchDrag
    wrap-around
  >
    <NuxtSlide v-for="(image) in images" :key="image.id">
      <div
        :style="`background-image: url(${image.url})`"
        class="hero-image"
      />
    </NuxtSlide>

    <template #addons>
      <NuxtNavigation />
    </template>
  </NuxtCarousel>
</template>


<style lang="sass" scoped>
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
