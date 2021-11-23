

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

function addItems(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if(value && !editFlag) {
        const element = document.createElement("article");
        const attr = document.createAttribute("data-set");
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
        const editBtn = element.querySelector(".edit-btn");
        editBtn.addEventListener("click", editItems);
        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteItems);
    }else if(value!=="" && editFlag){
        console.log("editFlag is true")
    }else{
        displayAlert("Empty value", "danger");
    }



}

function editItems() {
    console.log("edit");
}
function deleteItems() {
    console.log("delete");
}
function displayAlert(msg, action){
    alert.textContent = msg;
    alert.classList.add(`alert-${action}`);

}