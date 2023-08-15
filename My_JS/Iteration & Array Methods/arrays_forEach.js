const arr=[1,2,3,4,5,6,7,8,9,10];
const obj={
    name:'harsh',
    age:20,
    salary:10000,
}

// for of method
for(const item of arr){
    console.log(item);
}

for(const item in obj){
    console.log(obj[item]);
}



function envennos(myarr){
    if(myarr%2===0){
        console.log(myarr);
    }
}


arr.forEach(envennos);