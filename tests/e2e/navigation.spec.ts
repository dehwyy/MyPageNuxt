import { describe, test, it } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('My test', async () => {
  await setup({
  })

  it("navigation", async () => {
    const body = await $fetch('/')
    console.log(body);
  })
})