import { characters } from '../../src/js-foundation/02-destructuring';


describe("js-foundation/02-destructuring.ts", () => {
  test("characters should be an array", () => {

    expect(characters).toBeInstanceOf(Array)
  });

  test("characters should contain Flash and Superman", () => {

    expect(characters).toContain("Flash")
    expect(characters).toContain("Superman") //contain is case sensitive
  });

  test("characters should contain 6 elements", () => {

    //1. Arrange

    const length = characters.length

    expect(length).toBe(6)

    expect(characters).toHaveLength(6)
  })
})