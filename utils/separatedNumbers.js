const { randomNumberFromRange } = require("./random")

const separatedNumbers = (schema,separator)=>{
    const array = schema.map(([min,max])=>{
        console.log(min,max);
        return randomNumberFromRange(min,max)
    })
    console.log(array);
    return array.join(separator)
}

module.exports = separatedNumbers