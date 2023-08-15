const item=document.getElementById("card-id");
console.log(item);


const button=document.querySelector("button");



const buttons=document.querySelectorAll("button");
console.log(buttons);


buttons.forEach(function (eachbutton){
    eachbutton.style.padding="10px 20px";
    eachbutton.style.backgroundColor="rgb(120,211,1)";
    eachbutton.style.border="1px solid rgb(0,0,0)";
    eachbutton.style.fontWeight="800";
    eachbutton.style.color="white";
})

const specificbutton=document.querySelectorAll("mybutton");
console.log(specificbutton);