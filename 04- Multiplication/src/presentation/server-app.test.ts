import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';
import { ServerApp } from './server-app';


describe("ServerApp", () => {

  const options = {

    base: 5,
    limit: 10,
    showTable: true,
    name: "multiplication-table",
    dir: "outputs"
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test("should create server app instance", () => {

    const server = new ServerApp()


    expect(server).toBeInstanceOf(ServerApp)
    expect(typeof ServerApp.run).toBe("function")
  })


  // test("Should run serverapp with options", () => {

  //   const logSpy = jest.spyOn(console, 'log')
  //   const tableSpy = jest.spyOn(CreateTable.prototype, 'execute')
  //   const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute')


  //   ServerApp.run(options)

  //   expect(logSpy).toHaveBeenCalledTimes(3)
  //   expect(logSpy).toHaveBeenCalledWith("Server running ...")
  //   expect(logSpy).toHaveBeenLastCalledWith("File created")

  //   expect(tableSpy).toHaveBeenCalledTimes(1)
  //   expect(tableSpy).toHaveBeenCalledWith({
  //     base: options.base,
  //     limit: options.limit
  //   })

  //   expect(saveFileSpy).toHaveBeenCalledTimes(1)
  //   expect(saveFileSpy).toHaveBeenCalledWith({
  //     fileContent: tableSpy.mock.results[0].value,
  //     filePath: options.dir,
  //     fileName: options.name
  //   })
  // })


  test("Should run with custom mock methods", () => {

    const logMock = jest.fn()
    const logErrorMock = jest.fn()
    const createMock = jest.fn().mockReturnValue("5 x 1 = 5")
    const saveFileMock = jest.fn().mockReturnValue(true)

    console.log = logMock
    console.error = logErrorMock
    CreateTable.prototype.execute = createMock
    SaveFile.prototype.execute = saveFileMock

    ServerApp.run(options)

    expect(logMock).toHaveBeenCalledWith("Server running ...")
    expect(createMock).toHaveBeenCalledWith({ base: options.base, limit: options.limit })
    expect(saveFileMock).toHaveBeenCalledWith({ fileContent: "5 x 1 = 5", filePath: options.dir, fileName: options.name })
    expect(logMock).toHaveBeenCalledWith("File created")
    expect(logErrorMock).not.toHaveBeenCalled()

  })
})

