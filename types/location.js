const { randomNumberFromRange } = require("../utils/random")

const types = {
    zipCode:()=>{
        return [randomNumberFromRange(10000,99999)]
    },
    zipCodeFull:()=>{
        return [`${randomNumberFromRange(10000,99999)}-${randomNumberFromRange(1000,9999)}`]  
    }
}

module.exports = types