import {Emitter} from "mitt"

type MyEvents = {
    blurBackground: boolean
}

declare module "#app" {
    interface NuxtApp {
        $eventBus: Emitter<MyEvents>
    }
}

export { }
