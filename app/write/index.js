import fs from "fs"
import make from "../make/index.js";
const write = (name,obj)=>{
    console.log(name,obj);
    fs.writeFile(`./../generatedJSON/${name}.json`,JSON.stringify(make(obj)),(err)=>{
        if(err){
            console.log(err);
        }
    })
}

export default write