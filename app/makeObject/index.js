import { randomElementFromArray } from "../utils/random.js";
import * as types from "../types/index.js"
import makeArray from "../makeArray/index.js";
const makeObject = (obj)=>{
    const newObj = {...obj};
    for(let key in newObj){
        const el = newObj[key]
        if(Array.isArray(el)){
            newObj[key] = makeArray(...el)
        }
        else if(typeof el === "object"){
            newObj[key] = makeObject(el)
        }else{
            newObj[key] = randomElementFromArray(types[newObj[key]]());
        }
    }
    return newObj
}

export default makeObject