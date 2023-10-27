<script lang="ts" setup>
import {ref} from "vue"
import TimelineRow from "../components/TimelineRow.vue"

const { $eventBus } = useNuxtApp()
const isBlurred = ref(false)

$eventBus.on("blurBackground", (value: boolean) => {
  isBlurred.value = value
})
</script>

<template>
<!--  <div-->
<!--      :class="isBlurred ? 'blur' : ''"-->
<!--      class="container"-->
<!--  >-->
    <div id="contact">
      <div>
        <TimelineRow>
          <template #top-row><h2>&nbsp</h2></template>
          <template #bottom-row>
            <p><a href="mailto:mail@kasiaswiezak.com">mail(at)kasiaswiezak.com</a></p>
            <p><a href="tel:+49123456789">+49 176 238 778 20</a></p>
    <!--        <p><a href="https://www.instagram.com" target="_blank">Social</a></p>-->
    <!--        <p>Social: <a href="https://www.instagram.com/kasia_swiezak/" target="_blank"> <img id="insta-icon" src="/insta.png" alt="insta"></a></p>-->
          </template>
        </TimelineRow>
      </div>
<!--      <TimelineRow style="padding-bottom: 12px">-->
<!--        <template #top-row>-->
<!--          <h2><a href="mailto:mail@kasiaswiezak.com">mail(at)kasiaswiezak.com</a></h2>-->
<!--        </template>-->
<!--      </TimelineRow>-->
<!--      <TimelineRow>-->
<!--        <template #top-row>-->
<!--          <h2><a href="tel:+49123456789">+49 176 238 778 20</a></h2>-->
<!--        </template>-->
<!--      </TimelineRow>-->
    </div>
<!--  </div>-->
</template>

<style scoped lang="sass">

#contact
  z-index: 200
  background: #00dc82
  position: absolute
  top: 50%
  margin: auto
  //display: flex
  //flex-direction: row
  //justify-content: center
  //align-items: center
  //position: absolute
  //left: 50%
  //top: 50%
  //transform: translate(-50%, 50%)
  width: 500px




#insta-icon
  color: black
  height: 21px
  vertical-align: middle
  padding-right: 10px
  padding-bottom: 5px
  -webkit-filter: invert(1)

</style>
