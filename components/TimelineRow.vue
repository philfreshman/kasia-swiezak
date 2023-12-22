<template>
  <div class="mb-2">
    <div class="mb-5 flex w-fit flex-col lg:w-max">
      <div class="m-0 text-xl lg:mr-1">
        <slot name="top-row" />
      </div>

      <div class="ml-4 mt-2 max-w-[866px] text-xl md:ml-16">
        <slot name="bottom-row" />
      </div>
    </div>
  </div>
</template>
