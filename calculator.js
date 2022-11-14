const number1 = 10
const number2 = 0
const operation = '/'

let result;

if (number2 === 0){
    console.log('So nula ne se deli')
}

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