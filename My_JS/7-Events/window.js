const p=document.querySelectorAll('p');


console.log(p);
window.addEventListener('scroll',(e)=>{
    console.log(`Scroll x is ${window.scrollX} and Scroll Y is ${window.scrollY} `);
    if(window.scrollY >200){
       
        p.forEach(para => {
            para.style.backgroundColor='red';
        })
    }
    else{
        p.forEach(para => {
            para.style.backgroundColor='white';
        })
    }
})