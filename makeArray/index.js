const makeObject = require("../makeObject/index.js")
const types = require("../types/index.js")
const {randomElementFromArray} = require("../utils/random.js")
const makeArray = (type,number)=>{
    const newArray = [];
    for (let i=0;i<number;i++){
        let element;
        if(Array.isArray(type)){
            element = makeArray(...type)
        }else if(typeof type === "object"){
            element = makeObject(type)
        }else{
            element = randomElementFromArray(types[type]());
        }
        newArray.push(element)
    }
    return newArray
}



module.exports = makeArray
