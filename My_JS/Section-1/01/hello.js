const fruits=['apples','pineapple','pears',3];
console.log(fruits);
console.log(fruits[2]);

//add to end
fruits[4]='grapes';
console.log(fruits);
fruits.push('alibaba');
console.log(fruits)


//add to beginning
fruits.unshift('strawberry')
console.log(fruits)

console.log(fruits.indexOf('alibaba'))