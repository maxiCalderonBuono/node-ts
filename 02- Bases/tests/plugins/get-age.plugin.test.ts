import { getAge } from "../../src/plugins";


describe("plugins/get-age.plugin.ts", () => {

  test("should return an age of a person", () => {

    const birthdate = "1986-01-29"
    const age = getAge(birthdate)

    expect(typeof age).toBe("number")
  })

  test("getAge should return current age", () => {

    const birthdate = "1986-01-29"
    const age = getAge(birthdate)
    const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear()

    expect(age).toBe(calculatedAge)
  })

  test("getAge should return 0", () => {

    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(2020)

    const birthdate = "1986-01-29"
    const age = getAge(birthdate)
    expect(age).toBe(0)
    expect(spy).toHaveBeenCalled()
  })

})