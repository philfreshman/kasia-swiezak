<script lang="ts" setup>

</script>

<template>

  <div id="contact">
    <div class="center">
      <p><a href="mailto:mail@kasiaswiezak.com">mail(at)kasiaswiezak.com</a></p>
      <p><a href="tel:+49123456789">+49 176 238 778 20</a></p>
  <!--        <p><a href="https://www.instagram.com" target="_blank">Social</a></p>-->
  <!--        <p>Social: <a href="https://www.instagram.com/kasia_swiezak/" target="_blank"> <img id="insta-icon" src="/insta.png" alt="insta"></a></p>-->
    </div>
    <div class="bottom">
      <router-link class='check' to="legal">
        <h2>Legal Notice</h2>
      </router-link>
    </div>
  </div>



</template>

<style scoped lang="sass">


#contact
  height: 100%
  width: 100%
  //z-index: 200
  //background: #00dc82
  position: absolute
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

.bottom
  position: absolute

  bottom: 30px




#insta-icon
  color: black
  height: 21px
  vertical-align: middle
  padding-right: 10px
  padding-bottom: 5px
  -webkit-filter: invert(1)

</style>
