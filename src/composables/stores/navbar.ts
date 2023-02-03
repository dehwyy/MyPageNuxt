export const useNavbarStore = definePiniaStore('navbar', {
  state: (): IUseNavbarStore => {
    return {
      navbarItemsData: [
        {
          innerText: 'navbar1',
        },
        {
          innerText: 'navbar2',
        },
      ],
    }
  },
  persist: {
    key: 'pinia',
  },
})
