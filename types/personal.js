const separatedNumbers = require("../utils/separatedNumbers");

const types = {
    ssn:()=>{
        return [separatedNumbers([[100,999],[10,99],[1000,9999]],"-")]
    }
}

module.exports = types