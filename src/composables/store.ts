import { useNavbarStore } from '~/composables/stores/navbar'

export default class GlobalStore {
  static get store() {
    return {
      useNavbarStore,
    }
  }
}
