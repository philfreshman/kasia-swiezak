<template>
  <Container class="flex flex-col justify-between">

    <div class="h-full flex flex-row justify-center items-center">
      <div id="contact"
           class="text-xl sm:text-xl lg:text-[25px] flex flex-col items-center justify-between h-20 tracking-[2px]">
        <a href="mailto:mail@kasiaswiezak.com"><p>mail(at)kasiaswiezak.com</p></a>
        <a class="center pt-2" href="tel:+49123456789"><p>+49 176 238 778 20</p></a>
      </div>
    </div>

    <div class="flex justify-center h-[25%] flex-row items-center">
      <router-link to="legal">
        <h2 class="lineUp text-md sm:text-lg md:text-lg">Imprint</h2>
      </router-link>
    </div>

  </Container>
</template>
