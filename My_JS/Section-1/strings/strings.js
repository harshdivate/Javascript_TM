// string literal 
const fname= "Harsh";
const age=33;
console.log(`using string literal the name is  ${fname} and the age is ${age}`);

// type of string will be object because it will store individual character as array element
const s="hello,world,this,is,my,new,lalvda,";

console.log(s.length);
console.log(typeof s);

// lower and upper cases
console.log(s.toUpperCase());
console.log(s.toLowerCase());

// get index using the character
console.log(s.indexOf('w'));
console.log(s.charAt('7'));

// slicing and substring

console.log(s.substring(0,11));
// the difference between substring and slice is that in slice we can use negative index but in substring we cannot
console.log(s.slice(-9,-3));

const news = '       hello world       ';
console.log(news.trim());

const newe=s.replace("hello","nimoun");

console.log(newe);

console.log(s.includes("world"));

console.log(s.valueOf());

console.log(s.split(","));