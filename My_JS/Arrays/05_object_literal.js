const person={
    name:'John doe',
    age:31,
    location:'Los Angeles',
    hobbies:['movies','guitar'],
    isAdmin:false,
}
person.isAdmin=true;
person.email='john@gmail.com';
delete person.email;
person.greet=function(){
    console.log(`hello my name is ${this.name}`);
}
console.log(person);
person.greet();