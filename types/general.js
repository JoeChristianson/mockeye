const {randomNumberFromRange} = require("../utils/random")
const {randomElementFromArray} = require("../utils/random")
const {v4} = require("uuid")
const fs = require("fs")
const types = {
    string:()=>{
        const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let string = '';
        const stringLength = randomNumberFromRange(6,15)
        for(let i=0; i<stringLength; i++){
            string += randomElementFromArray(chars);
        }
        return [string]
    },
    id:()=>{
        return [v4()]
    },
    number:()=>{
        return [randomNumberFromRange(0,100000)]
    },
    lorem:(numberOfWords)=>{
        try{

            const fullLorem = fs.readFileSync("./textFiles/lorem.txt").toString().split(" ");
            const firstWordIndex = randomNumberFromRange(0,400)
            return fullLorem.slice(firstWordIndex,firstWordIndex+numberOfWords).join(" ")
        }catch(err){
            console.error(err)
        }
    }
}

module.exports = types