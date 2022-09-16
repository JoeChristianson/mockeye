const types= require("../types/index.js")
const {randomElementFromArray} = require("./random")
// first argument will be an array of all the types,second will be the template


const templater = (typesArray,template)=>{
    const newArray = [...typesArray]
    for (let i=0;i<typesArray.length;i++){
        const picks = types[typesArray[i]]()
        newArray[i]=randomElementFromArray(picks)
    }
    let str = template;
    const regex = /\*[0-9]*\*/gm
    const placeholders = Array.from(template.matchAll(regex)).map(res=>res[0]);
    for(let placeholder of placeholders){
        const index = parseInt(placeholder.substring(1,placeholder.length-1));
        str = str.replace(placeholder,newArray[index])
    }
    return str
}

module.exports = templater