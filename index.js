import make from "./make/index.js"
import util from "util"

const obj = [{window:[{day:"day"},5]},3]

console.log(util.inspect(make(obj),{showHidden:false,depth:null}));

console.log(JSON.stringify(make(obj)))

