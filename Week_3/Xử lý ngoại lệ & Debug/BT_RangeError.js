function calculator(number1, number2, operator) {
    var result;
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else if (operator == '/') {
        result = number1 / number2;
    }
    else {
        throw new RangeError('The operetor must be an +,-,*,/');
    }
    return result;
}
try {
    calculator(3, 9, "%");
}
catch (e) {
    if (e instanceof RangeError) {
        console.log(e.message);
    }
}
