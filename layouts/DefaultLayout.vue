<template>
  <NuxtLayout>

    <!--main-->
    <div class="h-full flex flex-col ">

      <Header />

      <!--content-->
      <div class="flex-1 flex-col overflow-scroll">
        <RouterView class="" />
      </div>

    </div>

  </NuxtLayout>
</template>
