function check(value:string):any
{
    if(["apple", "banana", "carrot"].includes(value) === false)
    {
        throw new RangeError('The argument must be an "apple", "banana", or "carrot".')
    }
}
try {
    check("cabbage")
} catch (error:any){
    if(error instanceof  RangeError){
        console.log(error.message)
    }
}