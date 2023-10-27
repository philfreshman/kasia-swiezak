<script setup lang="ts">
const props = defineProps({
  invertHeader: {type: Boolean, required: true},
  checked: Boolean,
  static: Boolean
})

function click(e: Event) {
  if (props.static)
    e.preventDefault()
}



</script>

<template>
  <div id="ham"
       :class="props.invertHeader ? 'invert' : '' ">
    <input class="toggle" type="checkbox" :checked="props.checked"
           @click="click"/>
    <div class="hamburger">
      <div></div>
    </div>
  </div>
</template>

<style scoped lang="sass">
$hamburger-height: 25px
$hamburger-width: 35px


.toggle
  margin: $header-margin
  z-index: 12
  height: $hamburger-height + 10px
  width: $hamburger-width + 10px
  position: absolute
  top: 0
  right: 0
  cursor: pointer
  opacity: 0

.hamburger
  z-index: 12
  margin: $header-margin
  position: absolute
  top: 0
  right: 0
  height: $hamburger-height
  width: $hamburger-width

  display: flex
  align-items: center
  justify-content: center

  &:hover
    cursor: pointer


/* CREATING THE MIDDLE LINE OF THE HAMBURGER :

.hamburger > div
  position: relative
  top: 0
  right: 0
  background: $black-transparent
  height: 1.5px
  width: 85%
  transition: all 0.3s ease

  &::before
    content: ''
    position: absolute
    top: -13px
    background: $black-transparent
    width: 100%
    height: 1.5px
    transition: all 0.3s ease

  &::after
    content: ''
    position: absolute
    background: $black-transparent
    width: 100%
    height: 1.5px
    transition: all 0.3s ease
    //top: -10px
    top: 13px


.hamburger > div:hover
  background: red


/* CREATING THE TOP AND BOTTOM LINES :
 *TOP AT -10PX ABOVE THE MIDDLE ONE AND BOTTOM ONE IS 10PX BELOW THE MIDDLE:

/* IF THE TOGGLE IS IN ITS CHECKED STATE, THEN SETTING THE BACKGROUND OF THE MIDDLE LAYER TO COMPLETE BLACK AND OPAQUE :

.toggle:checked + .hamburger > div
  background: rgba(0, 0, 0, 0)

  &::before
    top: 0
    transform: rotate(45deg)
    background: $black-transparent

  &::after
    top: 0
    transform: rotate(135deg)
    background: $black-transparent


/* AND ROTATING THE TOP AND BOTTOM LINES :




</style>
