const separatedNumbers = require("../utils/separatedNumbers")

const types = {
    phone:()=>{
        return [separatedNumbers([[100,999],[100,999],[1000,9999]],"-")]
    }
}

module.exports = types