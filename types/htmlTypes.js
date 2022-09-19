const { fake } = require("..")
const { randomNumberFromRange, randomElementFromArray } = require("../utils/random")
const { lorem } = require("./general")
const { imageUrl } = require("./web")

const types = {
    h1: ()=>{
        return [`<h1>${lorem(4)}</h1>`]
    },
    ul: ()=>{
        let ul = "<ul>"
        const listLength = randomNumberFromRange(3,7)
        for(let i=0;i<listLength;i++){
            const listItemWordCount = randomNumberFromRange(1,10)
            const innerText = lorem(listItemWordCount);
            const li = `<li>${innerText}</li>`
            ul+=li
        }
        ul+="</ul>"
        return ul
    },
    img: ()=>{
        let img = `<img src="`
        img+=randomElementFromArray(imageUrl())
        img+= `" />`
        return [img]
    }

}

module.exports = types