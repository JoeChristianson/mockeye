const randomElementFromArray = (array)=>{
    try{
        return array[Math.floor(Math.random()*array.length)]
    }catch(err){
        console.log("There was an error. This was the input array",array);
    }
}

const randomNumberFromRange = (min,max)=>{
    return(min+Math.floor(Math.random()*max))
}

module.exports = {randomElementFromArray,randomNumberFromRange}