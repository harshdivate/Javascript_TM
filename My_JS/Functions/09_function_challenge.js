/* 


Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.

For bonus points, write it as a one line arrow function

(32°F − 32) × 5/9 = 0°C


**Expected Result:**

```JavaScript
console.log(getCelsius(32)); // 0
*/

// function f_to_c(temp){
//     celcius=((temp-32)*(5/9));
//     console.log(`${temp}F in Temp in celcius is ${celcius}C`);
// }


// const f2c =(temp) => console.log(`${temp}\xB0F in Temp in celciuse is ${((temp-32)*(5/9))}\xB0C` ); 

// f2c(20)
// f_to_c(20);


// Challenge 2
/*
Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

**Expected Result:**

```JavaScript
console.log(minMax([1, 2, 3, 4, 5]));
// { min: 1, max: 5 }
*/


// const minMax =(arr) => {
//     console.log(...arr);
//     const min=Math.min(...arr);
//     const max=Math.max(...arr);

//     return {min,max};
// }
// console.log(minMax([1,2,3,4,5]));


/*
Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to 
the console in a message as soon as the page loads.

**Expected Result:**

```JavaScript
// On page load
The area of a rectangle with a length of 10 and a width of 5 is 50.
````


*/

(function (length,width){
    console.log(`The area of a rectangle with a lenght of ${length} and a width of ${width} is ${width*length}`);
})(10,5);