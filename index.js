const fake = require("./make/index.js");
const write = require("./write/index.js")
let types = require("./types")
let typesByName = {}
for(let name in types){
    typesByName[name]=name
}
types = typesByName

module.exports = {fake,write,types}