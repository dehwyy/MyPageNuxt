import { useNavbarStore } from '~/composables/stores/navbar'
import { useInfoStore } from '~/composables/stores/info'
import { useProjectsStore } from '~/composables/stores/projects'

export default class GlobalStore {
  static get store() {
    return {
      useNavbarStore,
      useInfoStore,
      useProjectsStore,
    }
  }
}
