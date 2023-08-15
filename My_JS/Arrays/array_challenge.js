const arr = [1, 2, 3, 4, 5];

// arr.push(6);
// arr.unshift(0);
// console.log(arr.reverse());
// **Expected Result:**

// ```js
// console.log(arr);
// [6, 5, 4, 3, 2, 1, 0];

const arr1=[1,2,3,4,5];
const arr2=[5,6,7,8,9,10];


let y=arr1.slice(0,4).concat(arr2);
console.log(y);