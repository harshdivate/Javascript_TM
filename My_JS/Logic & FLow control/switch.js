const d=new Date(2022,1,20,8,0,0);
const month=d.getMonth();

switch(month){
    case 1:
        console.log('It is jan');
        break;
    case 2:
        console.log('It is feb');
        break;
    case 3:
        console.log('It is march');
        break;
    default:
        console.log('it is not jan march or feb');
}
if (''){
    console.log(true);
}
else console.log(false);

console.log(10??20);

let a=false;
if(!a){
    a=10;
}
console.log(a);
