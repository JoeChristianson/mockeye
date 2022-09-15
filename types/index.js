const { randomElementFromArray, randomNumberFromRange } = require("../utils/random.js")

const arrayFromTextFile = require("../utils/arrayFromTextFile.js")

// specific types
const webTypes = require("./web")
const dateTimeTypes = require("./dateTime")
const locationTypes = require("./location")
const contactTypes = require("./contact")
const generalTypes = require("./general")
const fileTypes = require("./file")
const personalTypes = require("./personal")

const types = {
    ...personalTypes,
    ...fileTypes,
    ...generalTypes,
    ...contactTypes,
    ...locationTypes,
    ...dateTimeTypes,
    ...webTypes,
    dayOfWeek: ()=>{
        return [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ]
    },    
    firstName:()=>{
        return [
            "Bob",
            "Steve",
            "Randy",
            "Emily",
        "Jordan",
        "Nancy",
        "Ooma"
    ]
},

lastName: ()=>{
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
,
paragraph: ()=>{
    return arrayFromTextFile("lorem",{remove:[/(\r\n|\n|\r)/gm]})
}
,
email:()=>{
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let string = '';
    const userNameLength = randomNumberFromRange(6,15)
    for(let i=0; i<userNameLength; i++){
        
        string += randomElementFromArray(chars);
        
    }
    const domains = ["@gmail.com","@hotmail.com"]
    string+=randomElementFromArray(domains)
    return [string]
},

tf:()=>{
    return [true,false]
}
}

module.exports = types