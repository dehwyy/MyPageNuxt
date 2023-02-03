interface INavbarItemsData {
  innerText: string
}

interface IUseNavbarStore<T = unknown> {
  navbarItemsData: INavbarItemsData[] | T<INavbarItemsData[]>
}
