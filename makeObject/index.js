const makeObject = (obj)=>{
    const newObj = {...obj};
    for(let key in newObj){
        const el = newObj[key]
        newObj[key] = require("../make")(el)
    }
    return newObj
}

module.exports = makeObject