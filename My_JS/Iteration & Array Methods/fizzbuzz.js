

// for(let i=1;i<=100;i++){

//     if(i%3==0 ||  i%5==0){
//         if(i%3==0 && i%5==0){
//             console.log('Fizzbuzz');
//         }
//         else{
//             if(i%3==0){
//                 console.log('Fizz');
//             }
//             else{
//                 console.log('Buzz');
//             }
//         }
//     }

//     else{
//         console.log(i);
//     }
    
    
    

// }


// condition ? true statement : false satement i
let i=1
while(i<=100){
    i%3==0 && i%5==0 ? console.log('FizzBuzz') : i%3==0 ? console.log('Fizz') : i%5==0 ? console.log('Buzz') : console.log(i);;
    // console.log(i);
    i++;
}