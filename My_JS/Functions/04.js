// Block scope variables

if (true){
    let a=100;
    const b=200;
    var c=300;
    console.log(a,b,c);
}


// console.log(a);
// console.log(b);
console.log(c);


// var is not global scoped but function scoped

function run(){
    var d=100;
    console.log(d);
}



for(var i=0;i<=10;i++){
    console.log(i);
}


console.log(i);

function first(){
    const x=100;

    function second(){
        const y=400;
        console.log(x+y);
 
    }

    second();
}

first();