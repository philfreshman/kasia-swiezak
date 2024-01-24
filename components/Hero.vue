<script lang="ts" setup>
import useMobile from "~/composables/useMobile"

type HeroImage = {
  id: number
  url: string
}


onBeforeRouteLeave(() => {
  document.body.classList.remove("black")
  document.removeEventListener("keyup", handleArrowKey)
})

onMounted(() => {
  replaceArrows()
  document.body.classList.add("black")
  document.addEventListener("keyup", handleArrowKey)
})


const carousel = ref()
const isMobile = useMobile()

const imageType = computed(() => {
  if (isMobile.isMobile.value) {
    console.log("narrow")
    return "narrow"
  } else {
    console.log("full")
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
      <NuxtNavigation class="arrows-responsive" />
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
  justify-content: start

.carousel__next
  justify-content: end


.carousel__icon:hover
  fill: white !important

.carousel__liveregion.carousel__sr-only
  height: 0


.arrows-responsive
  @media only screen and (min-width: 600px)
    margin-left: var(--page-margin-sm)
    margin-right: var(--page-margin-sm)

  @media only screen and (min-width: 768px)
    margin-left: var(--page-margin-md)
    margin-right: var(--page-margin-md)

  @media only screen and (min-width: 992px)
    margin-left: var(--page-margin-lg)
    margin-right: var(--page-margin-lg)

  @media only screen and (min-width: 1200px)
    margin-left: var(--page-margin-xl)
    margin-right: var(--page-margin-xl)

  @media only screen and (min-width: 1536px)
    margin-left: var(--page-margin-2xl)
    margin-right: var(--page-margin-2xl)

</style>
