export const useNavbarStore = definePiniaStore('navbar', {
  state: (): IUseNavbarStore => {
    return {
      navbarItemsData: [
        {
          innerText: 'Home',
        },
        {
          innerText: 'About Us',
        },
        {
          innerText: 'Market',
        },
      ],
    }
  },
  persist: false,
})
