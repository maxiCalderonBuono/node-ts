
import fs from 'fs'
import { yarg } from './config/plugins/argvadapter-plugins'




let outputMessage = ""
const base = yarg.b


const headerMessage = `
==============================
       ${base} Times Table
==============================\n
`

for (let i = 1; i <= yarg.l; i++) {
  outputMessage += `${i} x ${base} = ${i * base}\n`
}

outputMessage = headerMessage + outputMessage

if (yarg.s) console.log(outputMessage)

const outputPath = "outputs"

fs.mkdirSync(outputPath, { recursive: true })

fs.writeFileSync(`${outputPath}/${base}TimesTable.txt`, outputMessage)