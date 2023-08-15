const person={
    name:'harsh',
    age:30,
    location:'hubli',
}

/* Destructing an object*/

const {name:firstname,age}=person;
console.log(firstname,age);


const personone={
    name:'harsh',
    age:30,
    location:{
        city:'hubli',
        state:'karnataka',
        country:'india',
    },
};

const {location:{city:usercity,state:userstate}} = personone;
console.log(usercity,userstate);

// destructing an array

const arr=[1,2,3,4,5,6];

const [firstnumber,secondnumber,...rest]=arr;
console.log(firstnumber,secondnumber);
console.log(rest);