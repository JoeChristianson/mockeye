import fs from "fs";
import logError from "./logError.js";

const arrayFromTextFile =  (fileName,options)=>{
    let text = fs.readFileSync(`./textFiles/${fileName}.txt`,logError).toString()
    if(options?.remove){
        options.remove.forEach(el=>{
            text = text.replace(el,"")
        })
    }
    const array = text.split(options?.delineator||"**")
    return array
}

export default arrayFromTextFile