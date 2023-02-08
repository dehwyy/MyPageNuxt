import AboutInfo from './AboutInfo/AboutInfo.vue'
import AboutNameAge from './AboutInfo/AboutNameAge.vue'
import AboutTechs from './AboutInfo/AboutTechs.vue'
import AboutProfileImage from './AboutInfo/AboutProfileImage.vue'
import AboutHobbies from './AboutInfo/AboutHobbies.vue'
import ProjectCards from './Projects/ProjectCards.vue'
export default class Features {
  static get fromAbout() {
    return {
      AboutInfo,
      AboutNameAge,
      AboutTechs,
      AboutHobbies,
      AboutProfileImage,
    }
  }
  static get fromProjects() {
    return { ProjectCards }
  }
}
