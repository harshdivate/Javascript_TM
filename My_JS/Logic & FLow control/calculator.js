// create a function that takes three parameters num1 num2 and operator
// the operator can be + - * or / if anything other than this is passed it s
// return an error MessageChannel

// calculator(5,2,'+')


function calculator(num1,num2,op){
    switch(op){
        case '+':
            return num1+num2;
            
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '/':
            return num1/num2;
        default:
            console.error('This is an error');

    }
}

console.log(calculator(5,2,'+'));
console.log(calculator(5, 2, '-')); // returns 3
console.log(calculator(5, 2, '*')); // returns 10
console.log(calculator(5, 2, '/')); // returns 2.5
