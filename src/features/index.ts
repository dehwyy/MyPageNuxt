import AboutInfo from './AboutInfo/AboutInfo.vue'
import AboutNameAge from './AboutInfo/AboutNameAge.vue'
import AboutTechs from './AboutInfo/AboutTechs.vue'
export default class Features {
  static get templates() {
    return {
      AboutInfo,
      AboutNameAge,
      AboutTechs,
    }
  }
}
