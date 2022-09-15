const fs = require("fs")
const make = require("../make/index.js")

const write = (path,typeSchema)=>{
    fs.writeFile(path,JSON.stringify(make(typeSchema)),(err)=>{
        if(err){
            console.log(err);
        }
    })
}

module.exports = write