<template>
  <div class="row">
    <div class="top-row">
      <slot name="top-row" />
    </div>
    <div class="bottom-row">
      <div class="block-left" />
      <div class="bottom-content">
        <slot name="bottom-row" />
      </div>
      <div class="block-right" />
    </div>
  </div>
</template>

<style lang="sass">
.row
  font-family: "Wermena", serif
  height: max-content

.block-left
  min-width: 4.2rem

.block-right
  min-width: 4.2rem

.bottom-row
  display: flex
  flex-direction: row
  padding-top: 1.375rem
  padding-bottom: 1.875rem

.bottom-content
  p
    padding-top: 1.375rem

  p:last-of-type
    padding-bottom: 2.8rem

</style>
