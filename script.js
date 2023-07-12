
const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
//target li - where you will store
const todolist = document.querySelector(".todo-list");
const completedtask = document.querySelector(".completed-task");

button.addEventListener("click", addTodo);
todolist.addEventListener("click", deleteTodo);
completedtask.addEventListener("click", deleteTodo);
function addTodo(event) {

    event.preventDefault(); //not working properly
    //create div-container for list-items
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("item-container");

    //create list-items
    const todoitem = document.createElement("li");
    todoitem.classList.add("todo-item");
    todoitem.innerText = input.value;
    todoDiv.appendChild(todoitem);

    //create delete-button
    const deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    todoDiv.appendChild(deletebtn);

    //create check-btn
    const ckbtn = document.createElement("p");
    ckbtn.classList.add("ck-btn");
    ckbtn.innerHTML = '<i class="fa-solid fa-check fa-beat"></i>';
    // ckbtn.innerText
    todoDiv.appendChild(ckbtn);
    if (input.value == "") {
        alert("put sth");
    }
    else {
        todolist.appendChild(todoDiv);
        input.value = "";
    }
}

function deleteTodo(event) {
    const item = event.target;
    console.log(item.classList[0]);


    if (item.classList[0] === "delete-btn") {
        const delitem = item.parentElement;
        delitem.remove();
    }
    if (item.classList[0] === "ck-btn") {
        const delitem = item.parentElement;
        if (delitem.parentElement.classList[0] === "todo-list")
            remove_form_new(item);
        else {
            remove_from_completed(item);
        }
    }
}
function remove_form_new(item) {
    let delitem = item.parentElement;
    delitem.classList.toggle("completed");
    item.childNodes[0].classList.remove("fa-beat");

    delitem.remove();

    const todoDiv = document.createElement("div");
    completedtask.appendChild(todoDiv);
    todoDiv.appendChild(delitem);
}

function remove_from_completed(item) {
    let delitem = item.parentElement;

    delitem.classList.toggle("completed");
    item.childNodes[0].classList.add("fa-beat");

    delitem.remove();
    // const todoDiv = document.createElement("div");
    // completedtask.appendChild(todoDiv);
    todolist.appendChild(delitem);
}
