
const makeArray = require("../makeArray/index.js")
const makeObject = require("../makeObject/index.js")
const types = require("../types/index.js")
const {randomElementFromArray} = require("../utils/random.js")



const make = (el)=>{
    if(Array.isArray(el)){
        return makeArray(...el)
    }
    else if(typeof el === "object"){
        return makeObject(el)
    }else if(typeof el === "string"){
        return randomElementFromArray(types[el]())
    }
}

module.exports = make