interface INavbarItemsData {
  innerText: string
  href: string
  blank?: boolean
}

interface ICreateNavbarStore {
  navbarItemsData: INavbarItemsData[]
}

type local = 'rus' | 'eng' | 'jp'

interface ILocalFields {
  name: string
  techText: string
  hobbies: string[]
  quotes: string[]
  age: string
  info: string
}

interface CreateInfoStoreExtra {
  profileImage: string
  techs: string[]
}

type ICreateInfoStore = CreateInfoStoreExtra & Record<local, ILocalFields>

interface IUseNavbarStore<T = unknown> {
  navbarItemsData: T<INavbarItemsData[]>
}
