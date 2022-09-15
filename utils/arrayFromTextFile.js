const { log } = require("console")
const fs = require("fs")
const path = require("path")
const logError = require("./logError.js")

const arrayFromTextFile =  (fileName,options)=>{
    const filePath = `${getFilePath("../textFiles")}/${fileName}.txt`
    let text = fs.readFileSync(filePath,logError).toString()
    if(options?.remove){
        options.remove.forEach(el=>{
            text = text.replace(el,"")
        })
    }
    const array = text.split(options?.delineator||"**")
    return array
}

const getFilePath = (relativePath)=>{
    const currentDir = __dirname
    const fullPath = path.resolve(currentDir,relativePath)
    return fullPath
}

module.exports = arrayFromTextFile