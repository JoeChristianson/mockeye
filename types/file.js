
const {randomElementFromArray} = require("../utils/random")

const extension = ()=>{
    return [".exe"]
}

const fileTypes = {
    fileName:()=>{
        const make = require("../make")
        return [make("string")+randomElementFromArray(extension())]
    },
    extension
}

module.exports = fileTypes