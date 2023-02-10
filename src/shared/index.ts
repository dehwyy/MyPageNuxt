import SwiperImage from './ui/SwiperImage.vue'
import Panel from './ui/Panel.vue'
import Dialog from './ui/Dialog.vue'
import ArrayRandomizer from './utils/arrayRandomizer'
import IntersectionObserver from './utils/IntersectionObserver'

export default class Shared {
  static get ui() {
    return { SwiperImage, Panel, Dialog }
  }
  static get utils() {
    return {
      ArrayRandomizer, IntersectionObserver
    }
  }
}
