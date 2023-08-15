const key=document.querySelector('.key');

document.body.addEventListener('keydown',myfunc);


function myfunc(e){
    const fkey=createkeydiv(e.key);
    console.log(fkey);
    key.innerHTML=`KEY PRESSED IS ${fkey.innerHTML} `;
    
    

    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.code)
}








function createkeydiv(key){
    const div=document.createElement('div');
    div.className='key';
    const text=document.createTextNode(key);
    div.appendChild(text);
    return div;
}