// object literal

const todo =new Object();

todo.id='john doe';
todo.title='buy milk';

todo.completed=false;

const newobj={
    name:{
        coordinate:{
            lat:'-1132',
            long:'123123',

        }
    }
};

// array of objects

const arr=[
    {id:1,name:'jonh'},
    {name:'harsh',age:32},
    {email:'harsh@gmail.com',gender:'male'}
]
console.log(Object.values(todo));
console.log(Object.keys(todo));

console.log(arr[1].age);