"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApp = void 0;
const create_table_use_case_1 = require("../domain/use-cases/create-table.use-case");
const save_file_use_case_1 = require("../domain/use-cases/save-file.use-case");
class ServerApp {
    static run({ base, limit, showTable, name, dir }) {
        console.log("Server running ...");
        const table = new create_table_use_case_1.CreateTable().execute({ base, limit });
        const isCreated = new save_file_use_case_1.SaveFile().execute({ fileContent: table, filePath: dir, fileName: name });
        if (showTable)
            console.log(table);
        (isCreated)
            ? console.log("File created")
            : console.log("File not created");
    }
}
exports.ServerApp = ServerApp;
