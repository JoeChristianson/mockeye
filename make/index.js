
const makeArray = require("../makeArray/index.js")
const makeObject = require("../makeObject/index.js")
const types = require("../types/index.js")
const {randomElementFromArray} = require("../utils/random.js")

const make = (typeSchema)=>{
    if(Array.isArray(typeSchema)){
        return makeArray(...typeSchema)
    }
    else if (typeof typeSchema === "object" && typeSchema.template){
        const result = require("../utils/templater")(typeSchema.typesArray,typeSchema.string)
        return result
    }
    else if(typeof typeSchema === "object"){
        return makeObject(typeSchema)
    }else if(typeof typeSchema === "string"){
        try{
            const array = types[typeSchema]()
            return randomElementFromArray(array)
        }catch(err){
            return "unknown type name provided"
        }
    }
}

module.exports = make