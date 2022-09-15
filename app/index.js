import make from "./make/index.js"
import util from "util"
import write from "./write/index.js"

const paragraphs = ["paragraph",2]
const blogPost = {
    name:{
        first:"firstName",
        last:"lastName"
    },
    email:"email",
    post:["paragraph",4],
    public:"tf"
}
const email = ["email",4]
const fake = make 


const res = fake(email)

module.exports = {fake,write}