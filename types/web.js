const separatedNumbers = require("../utils/separatedNumbers")
const fs = require("fs")
const types = {
    url:(options)=>{
        const defaultAttributes = {string:"http://www.google.com"}
        const attributes = {defaultAttributes,...options}
        return [attributes.string]
    },
    ipAddress:()=>{
        return [separatedNumbers([[0,255],[0,255],[0,255],[0,255]],".")]
    },
    imageUrl:()=>{
        try{

            const imageList = JSON.parse(fs.readFileSync("./jsonResources/testImages.json").toString());
            return imageList
            
        }catch(err){
            console.error(err)
        }
        
    }
}

module.exports = types