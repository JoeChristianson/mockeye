const { randomElementFromArray, randomNumberFromRange } = require("../utils/random.js")

const arrayFromTextFile = require("../utils/arrayFromTextFile.js")

module.exports.day = ()=>{
    return [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
}

module.exports.firstName = ()=>{
    return [
        "Bob",
        "Steve",
        "Randy",
        "Emily",
        "Jordan",
        "Nancy",
        "Ooma"
    ]
}

module.exports.lastName = ()=>{
    return [
        "Christianson",
        "Earle",
        "Ingels",
        "Peterson",
        "Jaspers",
        "Hearst",
        "James"
    ]
}

module.exports.paragraph = ()=>{
    return arrayFromTextFile("lorem",{remove:[/(\r\n|\n|\r)/gm]})
}

module.exports.email = ()=>{
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let string = '';
    const userNameLength = randomNumberFromRange(6,15)
    for(let i=0; i<userNameLength; i++){
        
        string += randomElementFromArray(chars);

    }
    const domains = ["@gmail.com","@hotmail.com"]
    string+=randomElementFromArray(domains)
    return [string]
}

module.exports.tf = ()=>{
    return [true,false]
}