<template>
  <div class="flex flex-col mb-5 w-fit
    lg:w-max"
  >
    <div
      class="m-0 lg:mr-1 text-xl">
      <slot name="top-row" />
    </div>

    <div class="mt-2 ml-4 md:ml-16 lg:mt-8 text-xl">
      <slot name="bottom-row" />
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
