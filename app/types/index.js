import arrayFromTextFile from "../utils/arrayFromTextFile.js"
import { randomElementFromArray, randomNumberFromRange } from "../utils/random.js"
export const day = ()=>{
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

export const firstName = ()=>{
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

export const lastName = ()=>{
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

export const paragraph = ()=>{
    return arrayFromTextFile("lorem",{remove:[/(\r\n|\n|\r)/gm]})
}

export const email = ()=>{
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let string = '';
    const userNameLength = randomNumberFromRange(6,15)
    console.log(userNameLength);
    for(let i=0; i<userNameLength; i++){
        
        string += randomElementFromArray(chars);

    }
    const domains = ["@gmail.com","@hotmail.com"]
    string+=randomElementFromArray(domains)
    return [string]
}

export const tf = ()=>{
    return [true,false]
}