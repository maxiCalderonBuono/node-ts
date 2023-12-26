import { getUserById } from '../../src/js-foundation/03-callbacks';


// describe("js-foundation/03-callbacks.ts", () => {
//   test("getUserById should return an error if user is not found", () => {

//     //1. Arrange
//     const id = 10

//     //2. Act
//     getUserById(id, (error, user) => {
//       expect(error).toBe("User with id 10 not found.")
//       expect(user).toBeUndefined()
//     })
//   })
// })


describe("js-foundation/03-callbacks.ts", () => {
  test("getUserById should return an error if user is not found", (done) => {

    //1. Arrange
    const id = 10

    //2. Act
    getUserById(id, (error, user) => {
      expect(error).toBe("User with id 10 not found.")
      expect(user).toBeUndefined()

      done()
    })
  });

  test("getUserById should return user Max when id is 1", (done) => {

    //1. Arrange
    const id = 1
    //2.Act
    getUserById(1, (error, user) => {
      expect(error).toBeUndefined()
      expect(user).toEqual({
        id: 1,
        name: 'Max'
      })

      done() //it's important to call done() after the test otherwise the test will fail.
    })
  })
})