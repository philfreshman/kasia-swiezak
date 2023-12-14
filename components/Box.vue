<script lang="ts" setup>

const props = defineProps({
  src: { type: String, required: true },
  text: { type: String, required: true },
  routerLink: { type: String, required: true },
})

</script>

<template>
  <div class="box">
    <div class="picture">
      <router-link :to="props.routerLink">
        <img
          :src="props.src"
          alt="picture"
          class="img"
        />
      </router-link>
    </div>
    <div class="description">
      <p>{{ props.text }}</p>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.box
  margin: 10px
  background-color: aquamarine

  aspect-ratio: 4 / 3
  width: 30vw
  max-width: 400px


.picture
  background-color: cornflowerblue

.img
  //aspect-ratio: 16 / 10
  width: 100%

.description
  background-color: cadetblue
</style>
