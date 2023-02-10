export default class IntersectionObserver {
  static useIntersecting() {
    const isVisible = ref<boolean | null>(null)


    const onIntersectionObserver = ([{ isIntersecting }]: {isIntersecting: boolean}[]) => {
      if (isVisible.value === null && isIntersecting) {
        isVisible.value = isIntersecting
      }
    }
    return [isVisible, onIntersectionObserver]
  }
}