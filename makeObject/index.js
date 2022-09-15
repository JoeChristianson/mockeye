const {randomElementFromArray} = require("../utils/random.js")
const types = require("../types/index.js")

const makeObject = (obj)=>{
    const newObj = {...obj};
    for(let key in newObj){
        const el = newObj[key]
        if(Array.isArray(el)){
            newObj[key] = require("../makeArray/index.js")(...el)
        }
        else if(typeof el === "object"){
            newObj[key] = makeObject(el)
        }else{
            newObj[key] = randomElementFromArray(types[newObj[key]]());
        }
    }
    return newObj
}

module.exports = makeObject