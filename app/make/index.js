import makeArray from "../makeArray/index.js"
import makeObject from "../makeObject/index.js"


const make = (el)=>{
    if(Array.isArray(el)){
        return makeArray(...el)
    }
    else if(typeof el === "object"){
        return makeObject(el)
    }
}

export default make