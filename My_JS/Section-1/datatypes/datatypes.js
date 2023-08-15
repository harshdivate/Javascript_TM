// Primitive Data Types and Reference Data Type

//String
const fname='harsh';
console.log(fname);

//boolean
const istrue=true;
console.log(istrue);

//null intentionally left blank
const cnull=null;
console.log(cnull);;
console.log(typeof cnull);

//symbol
const id=Symbol('Text');
console.log(id);
console.log(typeof id);


//bigint

const biggint=124141n;
console.log(biggint);
console.log(typeof biggint);

//array any refernce type is an object
const arr=[1,2,3,4,14,11];
console.log(arr);

//object
const obj={
    name:'harsh',
    email:'harshdivate@gmail.com'
}

console.log(obj);
console.log(typeof obj);


//function
const sayHello=function(){
    return 'Hello';
}

console.log(sayHello());

