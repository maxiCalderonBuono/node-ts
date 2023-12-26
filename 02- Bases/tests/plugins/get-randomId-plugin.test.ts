import { getRandomId } from "../../src/plugins";

describe("plugins/get-randomId-plugin.ts", () => {

  test("getRandomId should return a UUID", () => {

    const randomId = getRandomId()

    expect(typeof randomId).toBe("string")
    expect(randomId.length).toBe(36)
  })
})