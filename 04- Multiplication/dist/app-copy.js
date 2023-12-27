"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const argvadapter_plugins_1 = require("./config/plugins/argvadapter-plugins");
let outputMessage = "";
const base = argvadapter_plugins_1.yarg.b;
const headerMessage = `
==============================
       ${base} Times Table
==============================\n
`;
for (let i = 1; i <= argvadapter_plugins_1.yarg.l; i++) {
    outputMessage += `${i} x ${base} = ${i * base}\n`;
}
outputMessage = headerMessage + outputMessage;
if (argvadapter_plugins_1.yarg.s)
    console.log(outputMessage);
const outputPath = "outputs";
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFileSync(`${outputPath}/${base}TimesTable.txt`, outputMessage);
