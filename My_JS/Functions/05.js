// Hoisting 

let x=addDollarSign(10);
console.log(x);
function addDollarSign(value){
    return value+'$';
}




const addplussign=function(num){
    return num+'+';
}

x=addplussign(100);
console.log(x);