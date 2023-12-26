import { http } from "../../src/plugins";


describe("plugins/http-client-plugin.ts", () => {

  test("http.get() should return an object", async () => {

    const data = await http.get("https://jsonplaceholder.typicode.com/todos/1")

    expect(data).toEqual({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": expect.any(Boolean)
    })

  })

  test("http should have PUT, POST, DELETE methods", () => {

    expect(http.put).toBeDefined()
    expect(http.post).toBeDefined()
    expect(http.delete).toBeDefined()

    expect(typeof http.put).toBe("function")
    expect(typeof http.post).toBe("function")
    expect(typeof http.delete).toBe("function")


  })
})