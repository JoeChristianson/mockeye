const { randomNumberFromRange } = require("../utils/random")

const types = {
    streetNumber:()=>{
        return [randomNumberFromRange(1,14000)]
    },
    streetName:()=>{
        return["Elm Street","50th Avenue","Park Parkway"]
    },
    zipCode:()=>{
        return [randomNumberFromRange(10000,99999)]
    },
    zipCodeFull:()=>{
        return [`${randomNumberFromRange(10000,99999)}-${randomNumberFromRange(1000,9999)}`]  
    },
    country:()=>{
        return ["USA","Argentina","Nigeria","Thailand","Jordan","Palau"]
    },
    region:()=>{
        return ["North Dakota","Westphalia","Cabinda","Gangzhou"]
    },
    city:()=>{
        return ["Bangkok","Jerusalem","Melbourne","Caracas"]
    },
    coordinates:()=>{
        const coords = {latitude:null,longitude:null}
        coords.latitude = Math.floor(Math.random()*180000000)/1000000-90
        coords.longitude = Math.floor(Math.random()*360000000)/1000000-180
        return [coords]
    }
}

module.exports = types