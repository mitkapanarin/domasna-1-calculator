const number1 = 10
const number2 = 5
const operation = '/'

let result;

if (operation == '+'){
    result = number1 + number2
}
else if (operation == '-') {
    result = number1 - number2;
}
else if (operation == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`${number1} ${operation} ${number2} = ${result}`);