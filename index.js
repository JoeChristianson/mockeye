const fake = require("./make/index.js");
const write = require("./write/index.js")
let types = require('./types/index.js')

const newTypes = {}
for (let type in types){
    newTypes[type] = type
}
types = newTypes

// console.log(types)
console.log(fake(types.img))

module.exports = {fake,write,types}