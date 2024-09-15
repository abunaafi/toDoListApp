const form= document.getElementById('item-form')
const itemsList= document.getElementById('item-list')

function newItems(e) {
    e.preventDefault()

    const item=document.getElementById('item-input').value
    if (item === '') {
        alert('Please add something');
        return;
      }
    //creating li throuhj the dom
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    //putting the cancel button in the new Li
    const button = document.createElement("button");
    button.className = "remove-item btn-link text-red";
    //creating font awesome X icon as an elemnt node
    const xIcon = document.createElement("i");
    xIcon.className = "fa-solid fa-xmark";
    //appending the created new element
    button.appendChild(xIcon);
    li.appendChild(button);
    //appemding the new li item to the ul
    const ul = document.querySelector("ul");
    ul.appendChild(li);
}

//clearing item
function removeItem(e){
if(e.target.parentElement.classList.contains('remove-item')){
    e.target.parentElement.parentElement.remove()
}
}



//clearing whole list
function clearAll() {
        const ul = document.querySelector("ul");
        ul.innerHTML=''
      }
    const clearButton = document.querySelector(".btn-clear");

    
    //event handlers 
    form.addEventListener('submit',newItems)
    itemsList.addEventListener('click',removeItem)
    clearButton.addEventListener("click", clearAll)