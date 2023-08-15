//
console.log(5+'5');
// this will force the number to string because the javascript will try to concatenate the strings

console.log(5*'5');
// in this the javascript will have no other option but to multiple so it will convert the string into number

console.log(5+null);
// this will return 5 and null is converted to zero

console.log(5+true);
// this will return 6 true is converted to 1

console.log(5+false);

console.log(5+undefined);

console.log(5+NaN);

let x=1;
console.log(isNaN(x));
let s='string';
console.log(isNaN(s));