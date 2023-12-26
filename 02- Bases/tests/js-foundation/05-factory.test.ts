import { makeAPerson } from '../../src/js-foundation/05-factory';
import { getAge } from '../../src/plugins/get-age-plugin';
import { getRandomId } from '../../src/plugins/get-randomId-plugin';

describe("js-foundation/05-factory.ts", () => {

  const getAge = () => 35
  const getRandomId = () => '1234-5678-9012-3456'

  test("makeAPerson should return a function", () => {

    const person = makeAPerson({ getAge, getRandomId })

    expect(person).toBeInstanceOf(Function)
    expect(typeof person).toBe("function")
  })

  test("makeAPerson should return an object", () => {

    const person = makeAPerson({ getAge, getRandomId })

    const pepe = person({ name: 'pepe', birthdate: '1986-01-29' })

    expect(pepe).toEqual({
      id: '1234-5678-9012-3456',
      name: 'pepe',
      birthdate: '1986-01-29',
      age: 35
    })
  })
})