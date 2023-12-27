
const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args]

  const { yarg } = await import("./argvadapter-plugins")

  return yarg
}


describe("Test argvadapter-plugins", () => {

  const originalArgv = process.argv


  beforeEach(() => {
    process.argv = originalArgv
    jest.resetModules();
  })


  test("Should return defatult values", async () => {

    const argv = await runCommand(["-b", "5"])

    expect(argv).toEqual(expect.objectContaining({
      b: 5,
      l: 10,
      s: false,
      n: "multiplication-table",
      d: "outputs",
    }))
  })

  test("Should return config with custom values", async () => {

    const argv = await runCommand(["-b", "5", "-l", "20", "-s", "-n", "custom-name", "-d", "custom-dir"])

    expect(argv).toEqual(expect.objectContaining({
      b: 5,
      l: 20,
      s: true,
      n: "custom-name",
      d: "custom-dir",
    }))


  })
})

