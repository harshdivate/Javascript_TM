const add=function(value){
    return value+value;
}

console.log(add(50));


const multiply=(value,not) => value*not;

console.log(multiply(4,3));


const numbers=[1,2,3,4,5];
const newnumber=[];
numbers.forEach(n=>{newnumber.push(n*n)});
console.log(newnumber);