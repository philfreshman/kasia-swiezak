<template>
  <Container class="flex flex-col justify-between">

    <!--    <div class="text-2xl h-full flex flex-row justify-center items-center">-->
    <!--      <div>-->
    <!--        <a href="mailto:mail@kasiaswiezak.com"><p>mail(at)kasiaswiezak.com</p></a>-->
    <!--        <a class="center pt-2" href="tel:+49123456789"><p>+49 176 238 778 20</p></a>-->
    <!--      </div>-->
    <!--    </div>-->

    <div class="text-2xl h-full flex flex-row justify-center items-center">
      <div class="flex flex-col items-center justify-between h-20 font-[Minion Pro]">
        <a href="mailto:mail@kasiaswiezak.com"><p>mail(at)kasiaswiezak.com</p></a>
        <a class="center pt-2" href="tel:+49123456789"><p>+49 176 238 778 20</p></a>
      </div>
    </div>

    <div class="flex justify-center h-[25%] flex-row items-center">
      <router-link to="legal" @click="close">
        <h2 class="lineUp text-md sm:text-lg md:text-lg">Imprint</h2>
      </router-link>
    </div>

  </Container>
</template>


<script lang="ts" setup>
</script>
