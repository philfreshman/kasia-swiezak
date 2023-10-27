<script setup lang="ts">
</script>

<template>
  <div class="row">
    <div class="top-row">
      <slot name="top-row"/>
    </div>
    <div class="bottom-row">
      <div class="block"/>
      <div class="bottom-content">
        <slot name="bottom-row"/>
      </div>
      <div class="block"/>
    </div>
  </div>
</template>

<style lang="sass">
.row
  font-family: "Wermena", serif
  height: max-content

.block
  min-width: 65px
  width: 65px

.bottom-row
  display: flex
  flex-direction: row
  padding-top: 22px
  padding-bottom: 30px
  font-size: $p-font-size

.bottom-content
  p
    padding-top: 22px
  p:last-of-type
    padding-bottom: 45px

//h3
//  font-family: Wermena, serif
//  font-size: 1.5em
//  color: rgba(0, 0, 0, 0.9)
//  text-rendering: optimizeLegibility
</style>
