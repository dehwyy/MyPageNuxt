import AboutSwiper from './aboutSwiper.vue'
import AboutBackground from './aboutBackground.vue'
import ProjectsCards from './projectsCards.vue'
export default class Entities {
  static get visual() {
    return {
      AboutSwiper,
      AboutBackground,
      ProjectsCards,
    }
  }
}
