const separatedNumbers = require("../utils/separatedNumbers")

const types = {
    url:()=>{
        return ["http://www.google.com"]
    },
    ipAddress:()=>{
        return [separatedNumbers([[0,255],[0,255],[0,255],[0,255]],".")]
    }
}

module.exports = types