import AppWrapper from './wrappers/AppWrapper.vue'
import ContentWrapper from './wrappers/ContentWrapper.vue'
import NavbarWrapper from './wrappers/NavbarWrapper.vue'
import NavItemWrapper from './wrappers/NavItemWrapper.vue'
import AboutWrapper from './wrappers/AboutWrapper.vue'
export default class Widgets {
  static get wrappers() {
    return {
      AppWrapper,
      ContentWrapper,
      NavbarWrapper,
      AboutWrapper,
      NavItemWrapper,
    }
  }
}
