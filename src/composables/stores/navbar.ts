export const useNavbarStore = definePiniaStore('navbar', {
  state: (): ICreateNavbarStore => ({
    navbarItemsData: [
      {
        innerText: 'Home',
        href: '/',
      },
      {
        innerText: 'Projects',
        href: '/projects',
      },
      {
        innerText: 'Github',
        href: 'https://github.com/dehwyy',
        blank: true,
      },
    ],
  }),
  persist: false,
})
