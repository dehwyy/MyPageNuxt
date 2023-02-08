import { describe, expect, expectTypeOf, test } from 'vitest'
import ArrayRandomizer from '../src/shared/utils/arrayRandomizer'

describe('utils test', () => {
  test('test', () => {
    const intArray = ArrayRandomizer.randomize<number>([1, 2, 3, 4, 5])
    const stringArray = ArrayRandomizer.randomize<string>(['some', 'strings', 'here',])
    expectTypeOf(intArray).toMatchTypeOf<number[]>()
    expectTypeOf(stringArray).toMatchTypeOf<string[]>()
    expect(intArray).toHaveLength(5)
    expect(stringArray).toHaveLength(3)
  })
})
