import {useHeaderStore} from "~/stores/header"

export default defineNuxtRouteMiddleware((to) => {
  const header = useHeaderStore()
  if (to.fullPath === "/"){
    header.setTransparent(true)
  } else {
    header.setTransparent(false)
  }
})

