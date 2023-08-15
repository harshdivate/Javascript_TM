// Numbers

const num=12314123;
// length of number to get firt we should convert it to string

x=num.toString();
console.log(x.length);


let num2=num.toFixed(4);
console.log(num2);


// to precision means it will round up to the decimals we specify
const t=23.9931;
y=t.toPrecision(3);
console.log(y);


// to local string
const bign=5000000;
console.log(bign.toLocaleString());
console.log(bign.toLocaleString('en-IN'));