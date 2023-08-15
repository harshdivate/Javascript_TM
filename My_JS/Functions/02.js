const registeruser=function(person){
    console.log(`User is ${person.name} is registered under id ${person.id}`);
}


const person={
    name:'harsh',
    id:3,
}

const x=100;


// default parameter

const isAdmin=function(id,name='bot'){
    console.log(`register user is ${name} and id is ${id}`);
}

const rest=function(...rest){
    return console.log('Took multiple variable');
}

const arr=[1,2,3,4,5,6,7,8];

const arrfunction=function(array){
    let random_index=Math.floor(Math.random()*array.length);
    console.log(array[random_index]);
}

arrfunction(arr);

function run(){
    console.log(window.innerWidth);
}
run()


function add(){
    const x=1;
    const y=2;
    console.log(x+y);
}


add();

console.log(x);