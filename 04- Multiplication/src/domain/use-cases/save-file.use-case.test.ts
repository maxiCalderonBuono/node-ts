import { SaveFile } from './save-file.use-case';
import fs from 'fs';

describe("SaveFileUseCase", () => {

  beforeEach(() => {
    fs.rmSync("outputs", { recursive: true, force: true })
    fs.rmSync("custom-outputs", { recursive: true, force: true })
  })

  test("should save file whit default values", () => {
    const saveFile = new SaveFile();
    const filePath = "outputs/table.txt"
    const options = {
      fileContent: "test",
    }

    const result = saveFile.execute(options)

    expect(saveFile).toBeInstanceOf(SaveFile)
    expect(result).toBe(true)
    const checkFile = fs.existsSync(filePath)
    const fileContent = fs.readFileSync(filePath, 'utf-8')


    expect(checkFile).toBe(true)
    expect(fileContent).toBe(options.fileContent)
  })

  test("should save file whit custom values", () => {
    const saveFile = new SaveFile();

    const options = {
      fileContent: "custom content",
      filePath: "custom-outputs/file-destination",
      fileName: "custom-table-name"
    }

    const createdFilePath = `${options.filePath}/${options.fileName}.txt`

    const result = saveFile.execute(options)
    const checkFile = fs.existsSync(createdFilePath)
    const fileContent = fs.readFileSync(createdFilePath, 'utf-8')


    expect(result).toBe(true)
    expect(fileContent).toBe(options.fileContent)
    expect(checkFile).toBe(true)
  })


  test("should not save file and return false", () => {

    const saveFile = new SaveFile();

    const mkdirMock = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {

      throw new Error("Error")
    })

    const result = saveFile.execute({
      fileContent: "Hola"
    })

    expect(result).toBe(false)

    mkdirMock.mockRestore()

  })

  test("should not save file and return false", () => {

    const saveFile = new SaveFile();

    const writeFileMock = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {

      throw new Error("This is a custom writeFile error")
    })

    const result = saveFile.execute({
      fileContent: "Hola"
    })

    expect(result).toBe(false)

  })
})