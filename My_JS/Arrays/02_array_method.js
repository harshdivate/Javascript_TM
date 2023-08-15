const arr=[1,2,3,4,5,6,43,24,2,1,23,13,23213,123];
//         0 1 2 3 4 5  6  7 8 9 10  11 12    13
arr.push(9000);




const newarr=arr.slice(4,9); //[1,2,3,4,5,6]; ans:- 5,6,43,,24,2 
const newarr2 =arr.splice(4,9); //5,6,43,24,2 and arr :- 1,2,3,4,1,23,13,23213,123
console.log(newarr);

console.log(arr);
