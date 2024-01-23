<script lang="ts" setup>


const body = document.getElementsByTagName("body")[0]
const carousel = ref()

onBeforeRouteLeave(() => {
  body.classList.remove("black")
})

onMounted(() => {
  replaceArrows()
  body.classList.add("black")
  document.addEventListener("keyup", handleArrowKey)
})

type HeroImage = {
  id: number
  url: string
}


const width = ref(window.innerWidth)

const updateWidth = () => {
  width.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener("resize", updateWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWidth)
})


const imageType = computed(() => {
  if (width.value < 700) {
    return "narrow"
  } else {
    return "full"
  }
})


const images = readonly<HeroImage[]>([
  {
    id: 1,
    url: `./images/${imageType.value}/1_.webp`,
  },
  {
    id: 2,
    url: `./images/${imageType.value}/2_.webp`,
  },
  {
    id: 3,
    url: `./images/${imageType.value}/3_.webp`,
  },
  {
    id: 4,
    url: `./images/${imageType.value}/4_.webp`,
  },
  {
    id: 5,
    url: `./images/${imageType.value}/5_.webp`,
  },
  {
    id: 6,
    url: `./images/${imageType.value}/6_.webp`,
  },
  {
    id: 7,
    url: `./images/${imageType.value}/7_.webp`,
  },
  {
    id: 8,
    url: `./images/${imageType.value}/8_.webp`,
  },
  {
    id: 9,
    url: `./images/${imageType.value}/9_.webp`,
  },
  {
    id: 10,
    url: `./images/${imageType.value}/10_.webp`,
  },
  {
    id: 11,
    url: `./images/${imageType.value}/11_.webp`,
  },
  {
    id: 12,
    url: `./images/${imageType.value}/12_.webp`,
  },
])

const handleArrowKey = (event: KeyboardEvent) => {
  switch (event.key) {
    case "ArrowLeft":
      carousel.value.prev()
      break
    case "ArrowRight":
      carousel.value.next()
      break
  }
}

const replaceArrows = () => {
  const icons = document.getElementsByClassName("carousel__icon")
  for (let i = 0; i < icons.length; i++) {
    icons[i].setAttribute("viewBox", "0 0 39 11")
    const arrow = icons[i].lastChild as HTMLElement
    if (i % 2 == 0) {
      arrow.setAttribute(
        "d",
        "m6.482 10.914.388-.387L2.868 6.008H40v-.68h-37.133l4.132-4.312-.387-.387L1.749 5.621z",
      )
    } else {
      arrow.setAttribute(
        "d",
        "m33.518.086-.388.387L37.132 4.992H0v.68h37.133l-4.132 4.312.387.387L38.251 5.379z",
      )
    }
  }
}


</script>

<template>
  <NuxtCarousel ref="carousel" :autoplay="6000" touchDrag wrap-around>
    <NuxtSlide v-for="image in images" :key="image.id">
      <div :style="`background-image: url(${image.url})`" class="hero-image" />
    </NuxtSlide>

    <template #addons>
      <NuxtNavigation />
    </template>
  </NuxtCarousel>
</template>

<style lang="sass">

.hero-image
  transition: all
  transition-duration: 1s
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  height: 100svh
  width: 100vw


.carousel
  height: 100%

  &__viewport
    height: 100% !important

.carousel
  &__icon
    color: rgba(255, 255, 255, 0.65) !important

.carousel svg
  // arrow size
  width: 80px !important

.carousel__prev, .carousel__next
  display: flex
  flex-direction: row
  width: 80px !important
  top: calc(100% - var(--page-margin-xl) - 10px) !important

.carousel__prev
  left: -10px !important
  justify-content: start

.carousel__next
  right: -10px !important
  justify-content: end


.carousel__icon:hover
  fill: white !important

.carousel__liveregion.carousel__sr-only
  height: 0
</style>
