import { CreateTable } from "../domain/use-cases/create-table.use-case"
import { SaveFile } from "../domain/use-cases/save-file.use-case"


interface RunOptions {
  base: number,
  limit: number,
  showTable: boolean
  name: string
  dir: string
}

export class ServerApp {



  static run({ base, limit, showTable, name, dir }: RunOptions) {
    console.log("Server running ...")

    const table = new CreateTable().execute({ base, limit })
    const isCreated = new SaveFile().execute({ fileContent: table, filePath: dir, fileName: name })

    if (showTable) console.log(table);

    (isCreated)
      ? console.log("File created")
      : console.log("File not created")
  }
}