const separatedNumbers = require("../utils/separatedNumbers");

const types = {
    firstName:(options)=>{
        if (options.nationality==="swedish"){
            return ["Inge"]
        }
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
    ssn:()=>{
        return [separatedNumbers([[100,999],[10,99],[1000,9999]],"-")]
    }
}

module.exports = types