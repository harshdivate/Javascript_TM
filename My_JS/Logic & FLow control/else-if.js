const d=new Date();
const x=d.getHours();

console.log(x);

if(x<12){
    console.log('Good morning');
}
else if(x<18){
    console.log('good afternoon');
}
else{
    console.log('good night');
}