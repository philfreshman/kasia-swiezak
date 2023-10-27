<script setup lang="ts">
// import AppHeader from "../components/AppHeader.vue"

</script>

<template>
  <NuxtLayout>
      <AppHeader/>
    <keep-alive>
    <RouterView/>
    </keep-alive>
  </NuxtLayout>
</template>
