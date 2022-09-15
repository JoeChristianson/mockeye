import makeArray from "../makeArray/index.js"
import makeObject from "../makeObject/index.js"
import { randomElementFromArray } from "../utils/random.js"
import * as types from "../types/index.js"

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

export default make