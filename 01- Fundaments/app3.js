const fs = require("fs");


const data = fs.readFileSync("readme.md", "utf8")

const wordCount = data.split(" ").length

const countReact = data.match(/react/ig ?? []).length
console.log(countReact)

