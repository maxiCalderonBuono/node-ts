

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'


export const yarg = yargs(hideBin(process.argv))
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

    if (argv.b < 1) throw "Error: Base must be greater than 0"

    return true
  })
  .parseSync()