function calculator(number1:number, number2:number, operator:string) {
    let result;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    } else {
        throw new RangeError('The operetor must be an +,-,*,/')
    }
    return result;
}
try {
    calculator(3,9,"%")
} catch (e:any){
    if (e instanceof RangeError){
        console.log(e.message)
    }

}