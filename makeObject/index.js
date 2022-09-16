const {randomElementFromArray} = require("../utils/random.js")
const types = require("../types/index.js");

const makeObject = (obj)=>{
    const newObj = {...obj};
    for(let key in newObj){
        const el = newObj[key]
        if(Array.isArray(el)){
            newObj[key] = require("../makeArray/index.js")(...el)
        }
        else if (typeof newObj[key] === "object" && newObj[key].template){
            newObj[key]= require("../make/index.js")(newObj[key])
        }
        else if(typeof el === "object"){
            newObj[key] = makeObject(el)
        }else{
            if(types[el]){
                newObj[key] = randomElementFromArray(types[newObj[key]]());
            }else{
                console.log("unknown type name provided")
                newObj[key] = "unknown type name provided"
            }
        }
    }
    return newObj
}

module.exports = makeObject