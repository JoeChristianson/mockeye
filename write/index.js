const fs = require("fs")
const make = require("../make/index.js")

const write = (path,obj)=>{
    fs.writeFile(path,JSON.stringify(make(obj)),(err)=>{
        if(err){
            console.log(err);
        }
    })
}

module.exports = write