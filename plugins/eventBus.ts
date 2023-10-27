//@ts-ignore
import mitt, {Emitter} from "mitt"

type MyEvents = {
    blurBackground: boolean
}

const eventBus: Emitter<MyEvents> = mitt<MyEvents>()

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("eventBus", {
    on: eventBus.on,
    emit: eventBus.emit,
  })
})
