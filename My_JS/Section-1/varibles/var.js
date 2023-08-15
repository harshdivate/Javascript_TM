//let ,var ,conts

// let is used if the values are further changed in future
// const are used when we want constants we should define and assign values in definiton itself


let firstName;
let lastName='divate';
firstName='harsh';
const number_one=1;
console.log(firstName,lastName);
console.log(number_one);

const arr=[1,2,3,4];
console.log(arr);
arr.push(100);
arr[1]=12222;
console.log(arr);

// reassigning variables
lastName='divateeee';
console.log(lastName);


const person={
    name_one:'harsh',
    email:'harsh@123'


};

console.log(person);



person.name_one='rafiq';
person.email='rafiq@gmail.com'
console.log(person.name_one);

// declare mulitple values at one]

let a,b,c;
a=100,b=100,c=100;
console.log(a,b,c);

const ten=10;ele=11;
console.log(ten,ele);