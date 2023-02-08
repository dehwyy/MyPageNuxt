import SwiperImage from './ui/SwiperImage.vue'
import Panel from './ui/Panel.vue'
import ArrayRandomizer from './utils/arrayRandomizer'

export default class Shared {
  static get ui() {
    return { SwiperImage, Panel }
  }
  static get utils() {
    return {
      ArrayRandomizer,
    }
  }
}
