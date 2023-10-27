import type { RouterConfig } from "@nuxt/schema"
import DefaultLayout from "~/layouts/DefaultLayout.vue"
import About from "~/pages/About.vue"
import Contact from "~/pages/Contact.vue"
import Filmography from "~/pages/Filmography.vue"
import Index from "~/pages/Index.vue"
import LegalNotice from "~/pages/LegalNotice.vue"

export default <RouterConfig> {
  routes: () => [
    {
      path: "/",
      name: "Index",
      component: DefaultLayout,
      children: [
        {
          path: "/",
          name: "Index",
          component: Index,
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: DefaultLayout,
      children: [
        {
          path: "/about",
          name: "about",
          component: About
        }
      ]
    },
    {
      path: "/contact",
      name: "Contact",
      component: DefaultLayout,
      children: [
        {
          path: "/contact/",
          name: "Contact",
          component: Contact,
        }
      ]
    },
    {
      path: "/filmography",
      name: "Filmography",
      component: DefaultLayout,
      children: [
        {
          path: "/filmography",
          name: "Filmography",
          component: Filmography,
        }
      ]
    },
    {
      path: "/legal",
      name: "Legal",
      component: DefaultLayout,
      children: [
        {
          path: "/legal",
          name: "Legal",
          component: LegalNotice,
        }
      ]
    }
  ]
}
