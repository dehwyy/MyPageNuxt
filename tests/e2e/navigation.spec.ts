import { describe, test, it, expect } from "vitest";
import { setup, $fetch } from '@nuxt/test-utils'

describe('My test', async () => {
  await setup({
  })

  it("navigation", async () => {
    const body = await $fetch('/')
    expect(body).to.contain("Projects")
    expect(body).to.contain("Home")
    expect(body).to.contain("Github")
  })
})