<template>
  <div id="contact">
    <div>
      <a href="mailto:mail@kasiaswiezak.com"><p>mail(at)kasiaswiezak.com</p></a>
      <a class="center pt-2" href="tel:+49123456789"
        ><p>+49 176 238 778 20</p></a
      >
      <!--        <p><a href="https://www.instagram.com" target="_blank">Social</a></p>-->
      <!--        <p>Social: <a href="https://www.instagram.com/kasia_swiezak/" target="_blank"> <img id="insta-icon" src="/insta.png" alt="insta"></a></p>-->
    </div>
  </div>
  <!--  </Container>-->
</template>

<style lang="sass" scoped>

.center
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  flex-direction: column


#contact
  top: 0
  position: absolute
  font-size: 1.5rem
  margin-top: -10px
  height: 100%
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center


#insta-icon
  color: black
  height: 21px
  vertical-align: middle
  padding-right: 10px
  padding-bottom: 5px
  -webkit-filter: invert(1)
</style>
