let myString="developer";
x="developer";


// Solutin one
t=myString.replace("d","D");
console.log(t);

// Solution 2
let newString="D"+x.slice(1,myString.length);
console.log(newString);

// Solution 3
console.log(myString[0].toUpperCase()+myString.slice(1,myString.length));
