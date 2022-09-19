const { randomElementFromArray } = require("../utils/random")


const makeTypeWithOptions = (type,options)=>{
    return randomElementFromArray(
    require("../types")[type](options))
}

module.exports = makeTypeWithOptions