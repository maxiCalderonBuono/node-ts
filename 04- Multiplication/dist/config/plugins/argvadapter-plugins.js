"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yarg = void 0;
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
exports.yarg = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "The base number to multiply"
})
    .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "The limit of the times table"
})
    .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show multiplication table"
})
    .option("n", {
    alias: "name",
    type: "string",
    default: "multiplication-table",
    describe: "The name of the file"
})
    .option("d", {
    alias: "dir",
    type: "string",
    default: "outputs",
    describe: "The directory to save the file"
})
    .check((argv, options) => {
    if (argv.b < 1)
        throw "Error: Base must be greater than 0";
    return true;
})
    .parseSync();
