const { randomNumberFromRange } = require("./random")

const randomDate = ()=>{
    return new Date(randomNumberFromRange(0,Date.now()))
}

module.exports = randomDate