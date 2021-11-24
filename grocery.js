

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".grocery-alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editFlag = false;
let editID = "";

form.addEventListener("submit", addItems);
/* Cannot write "function(){}", will not show alert */
clearBtn.addEventListener("click", clearItems);
window.addEventListener("DOMContentLoaded", setupItems);

function addItems(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if(value && !editFlag) {
        createListItem(id, value)
        //container classlist
        container.classList.add("show-container");
        //localStorage
        addToLocalStorage(id, value);
        //set back to default
        setBackToDefault();


    }else if(value!=="" && editFlag){
        editElement.innerHTML = value; //^^textContent works too!
        displayAlert("item is edited", "success");
        editToLocalStorage(editID, value);
        setBackToDefault();

        //same as above, but no container.classlist and no appendChild.
    }else{
        displayAlert("Empty value", "danger");
    }

}


function displayAlert(msg, action){
    alert.textContent = msg;
    alert.classList.add(`alert-${action}`);
    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);


}
function clearItems(){
    const items = document.querySelectorAll(".grocery-item");
    if(items.length > 0) {
       items.forEach(function(item){
           list.removeChild(item);
        })

    }
    container.classList.remove("show-container")
    displayAlert("no items now", "danger");
    setBackToDefault();
    localStorage.removeItem("list");
    //the name of the list called list in local storage!!!


}
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;

    list.removeChild(element);

    if(list.children.length === 0) {
        container.classList.remove("show-container")
    }
    displayAlert("item is removed", "danger");
    setBackToDefault();
    removeFromLocalStorage(id);


}

function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML; //^^textContent works too!
    editFlag = true;
    editID = element.dataset.id;

    submitBtn.textContent = "edit";

}
function setBackToDefault(){
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
    //it was copied.
}
function addToLocalStorage(id, value){
    const grocery = {id, value};
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage(){
    return localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];
}
function removeFromLocalStorage(id){
    let items = getLocalStorage();
    items = items.filter(function(item){
       if(item.id !== id){
           return item;
       }
    })
    localStorage.setItem("list", JSON.stringify(items));
}

function editToLocalStorage(id, value){
    let items = getLocalStorage();
    items = items.map(function(item){
        if(item.id === id){
            item.value = value;
        }
        return item;
    })
    localStorage.setItem("list", JSON.stringify(items));
}

function setupItems(){
    let items = getLocalStorage();
    if (items .length > 0){
        items.forEach(function(item){
            createListItem(item.id, item.value);
        })
        container.classList.add("show-container");
    }
}
function createListItem(id, value){
    const element = document.createElement("article");
    const attr = document.createAttribute("data-id"); //^^^!!!Not "data-set"!!!
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `<p class="grocery-title">${value}</p>
                <div class="grocery-btn-container">
                    <button type="button" class="edit-btn">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" class="delete-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>`
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    list.appendChild(element);

}