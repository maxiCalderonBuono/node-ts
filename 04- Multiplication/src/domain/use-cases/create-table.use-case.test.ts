import { CreateTable } from './create-table.use-case';


describe("CreateTableUseCase", () => {
  test("should return a multiplication table with default values", () => {
    const createTable = new CreateTable();

    const table = createTable.execute({ base: 5 });
    const rows = table.split('\n').length

    expect(createTable).toBeInstanceOf(CreateTable)
    expect(table).toContain("5 x 1 = 5")
    expect(table).toContain("5 x 10 = 50")
    expect(rows).toBe(10)

  })

  test("should return a multiplication table with custom values", () => {
    const createTable = new CreateTable();
    const options = {
      base: 6,
      limit: 20
    }
    const table = createTable.execute(options);
    const rows = table.split('\n').length

    expect(rows).toBe(options.limit)
    expect(table).toContain("6 x 20 = 120")
  })
})