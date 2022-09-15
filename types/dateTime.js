const randomDate = require("../utils/randomDate")

const types = {
    date:()=>{
        let date = randomDate().toJSON()
        const delineator = "-"
        date = date.split("T")[0]
        dateArray = date.split("-")
        dateArray = dateArray.map(d=>parseInt(d))
        date = `${dateArray[1]}${delineator}${dateArray[2]}${delineator}${dateArray[0]}`
        return [date]
    },
    timeStamp:()=>{
        return [randomDate().toString()]
    },
    year:()=>{
        return [randomDate().getFullYear()]
    },
    month:()=>{
        return [randomDate().getMonth()]
    },
    day:()=>{
        return [randomDate().getDay()]
    }
}

module.exports = types