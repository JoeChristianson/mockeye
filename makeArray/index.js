const makeObject = require("../makeObject/index.js")
const types = require("../types/index.js")
const {randomElementFromArray} = require("../utils/random.js")
const makeArray = (type,number)=>{
    console.log(type,number)
    const newArray = [];
    for (let i=0;i<number;i++){
        let element;
        if(Array.isArray(type)){
            element = makeArray(...type)
        }
        else if (typeof type === "object" && type.template){
            element = require("../make/index.js")(type)
        }
        else if(typeof type === "object"){
            element = makeObject(type)
        }else{
            try{
                element = randomElementFromArray(types[type]());
            }catch(err){
                console.log("unknown type name provided")
                element = "unknown type name provided"
            }
        }
        newArray.push(element)
    }
    return newArray
}



module.exports = makeArray
