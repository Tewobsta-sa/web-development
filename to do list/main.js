let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoInput = document.getElementById('input');
const todolist = document.getElementById('tasks')
const del = document.getElementById('delete');
const add = document.getElementById('add');


document.addEventListener("DOMContentLoaded", function(){
    add.addEventListener('click', addtask);
    input.addEventListener('keydown', function(event){
        if (event.key == "Enter"){
            event.preventDefault();
            addtask();
        }
    });
    del.addEventListener('click',deleteAllTasks);
    displayTasks();
})

function addtask(){
    const newTask  = todoInput.value.trim();//remove un neccsesary
    if (newTask !== ""){
        todo.push({
            text: newTask, disabled: false
        });
        saveToLocalStorage();
        todoInput.value = ''
        displayTasks();
    }
}
function deleteAllTasks(){
    //ab
}
function displayTasks(){
    todolist.innerHTML="";
    
}
function saveToLocalStorage(){
    localStorage.setItem('todo', JSON.stringify(todo));
}
