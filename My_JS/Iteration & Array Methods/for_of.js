const items=["harsh",1,2,3,4,5,"divate"];

const objects1={
    name:'garhs',
    age:20,
    occupation:'business',
    salary:100000,
}

for (let key in objects1){
    console.log(objects1[key]);
}


for (const item of items){
    console.log(item);
}
