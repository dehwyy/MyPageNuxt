import AppWrapper from './wrappers/AppWrapper.vue'
import ContentWrapper from './wrappers/ContentWrapper.vue'
import NavbarWrapper from './wrappers/NavbarWrapper.vue'
export default class Widgets {
  static get wrappers() {
    return {
      AppWrapper,
      ContentWrapper,
      NavbarWrapper,
    }
  }
}
