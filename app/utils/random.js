export const randomElementFromArray = (array)=>{
    try{
        return array[Math.floor(Math.random()*array.length)]
    }catch(err){
        console.log("There was an error. This was the input array",array);
    }
}

export const randomNumberFromRange = (min,max)=>{
    return(min+Math.floor(Math.random()*max))
}