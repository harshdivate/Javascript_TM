const form=document.querySelector('#item-form');
const itemInput=document.querySelector('#item-input');
const list=document.querySelector('#item-list');
const clearButton=document.querySelector('#clear');
const filter=document.querySelector(".filter");



function addItem(e){
    e.preventDefault();
    newItem=itemInput.value;
    console.log(itemInput.value);
    if(newItem===''){
        alert('Please Provide Item');
    }
    else {
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(newItem));
        const button=createButton('remove-item btn-link text-red');
        const icon=createIcon('fa-solid fa-xmark');
        button.appendChild(icon);
        li.appendChild(button);
        console.log(li);
        list.appendChild(li);
        clearUI();
        console.log(list);
    }

   
    
}

function createButton(classes){
    const button=document.createElement('button');
    button.className=classes;
    return button;
}

function createIcon(classes){
    const icon=document.createElement('i');
    icon.className=classes;
    return icon;
}

function removeItem(e){
    if(confirm('Are you sure?')){
        if(e.target.parentElement.classList.contains('remove-item')){
            e.target.parentElement.parentElement.remove();
            clearUI();
        }
    }
    
}


function filterItems(e){
    const items=list.querySelectorAll('li');
    const text=e.target.value.toLowerCase();
    console.log(items);
    items.forEach(items => {
        const itemName=items.firstChild.textContent.toLocaleLowerCase();
        if(itemName.indexOf(text)!= -1){
            items.style.display='flex';
        }
        else{
            items.style.display='none';
        }
        console.log(itemName);
    });


}



function clearUI(){
    const items=list.querySelectorAll('li');
    if(items.length === 0){
        filter.style.display='none';
        clearButton.style.display='none';
    }
    else {
        filter.style.display='block';
        clearButton.style.display='block';
    }

}
function clearList(){
    while (list.firstChild){
        list.removeChild(list.firstChild);
    }
    clearUI();
}
form.addEventListener('submit',addItem);

list.addEventListener('click',removeItem);
clearButton.addEventListener('click',clearList);
filter.addEventListener('input',filterItems);

clearUI();