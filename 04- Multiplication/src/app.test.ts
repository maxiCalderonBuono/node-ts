import { ServerApp } from "./presentation/server-app"




describe("Test App.ts", () => {

  test("Should call ServerApp.run with values", async () => {


    const serverRunMock = jest.fn()
    ServerApp.run = serverRunMock
    process.argv = ["node", "app.ts", "-b", "5", "-l", "10", "-s", "-n", "custom-name", "-d", "custom-dir"]

    await import("./app")

    expect(serverRunMock).toHaveBeenCalledWith({ base: 5, limit: 10, showTable: true, name: "custom-name", dir: "custom-dir" })
  })
})