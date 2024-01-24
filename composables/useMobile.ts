export default function useMobile() {
    const isMobile = ref(window.innerWidth < 700)
    const width = ref(window.innerWidth)
    const updateWidth = () => width.value = window.innerWidth

    onMounted(() => {
        window.addEventListener("resize", updateWidth)
    })

    onBeforeUnmount(() => {
        window.removeEventListener("resize", updateWidth)
    })

    watch(width, () => {
        isMobile.value = width.value < 700
    })


    return { isMobile }
}

