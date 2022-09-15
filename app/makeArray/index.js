import makeObject from "../makeObject/index.js";
import * as types from "../types/index.js"
import { randomElementFromArray } from "../utils/random.js";

const makeArray = (type,number)=>{
    const newArray = [];
    for (let i=0;i<number;i++){
        let element;
        if(Array.isArray(type)){
            element = makeArray(...type)
        }else if(typeof type === "object"){
            element = makeObject(type)
        }else{
            console.log(types);
            element = randomElementFromArray(types[type]());
        }
        newArray.push(element)
    }
    return newArray
}


export default makeArray
