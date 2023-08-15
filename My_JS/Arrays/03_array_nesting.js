const arr=[1,2,3,4,5,6,7,8,9,10];


const arr2=[11,23,44,12,12313,1231,31,41,3];

// spread operator
let x=[...arr,...arr2];

const arr4=[1,2,[3,4,5,10,12,12,12,12,11],6,[7,8,[9,10,[11,12]]]];

y=arr4.flat(1);

y=Array.from('123123123213');
console.log(Array.isArray(arr4));

const a=1;
const b=2;
const c=3;
y=Array.of(a,b,c);

// x=arr.concat(arr2);
console.log(y);