export default class ArrayRandomizer {
  static randomize<T extends string | number>(array: T[]): T[] {
    const newArray = [] as T[]
    for (const element of array) {
      if (Math.random() > 0.5) {
        newArray.push(element)
      } else {
        newArray.unshift(element)
      }
    }
    return newArray
  }
}
