let todoInput = document.querySelector('.input');
let addTodoButton = document.querySelector('.button');
let showTodos = document.querySelector('.todos-container');
let todo;
let todoList = [];

function uniqueId(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(param){
        let number = Math.random() * 16 | 0;
        let randomNumber = param == 'x' ? number : (number & 0x3 | 0x8);
        return randomNumber.toString(16);
    });
}

addTodoButton.addEventListener("click", (e) => {
    e.preventDefault();
    todo = todoInput.value;
    if (todo.length > 0){
        todoList.push({id: uniqueId(), todo, isCompleted: false})
    }  
    renderTodoList(todoList); 
})

function renderTodoList(todoList){
    console.log(todoList);
    
    showTodos.innerHTML = todoList.map(todo => `<div><input type="checkbox" /><label class="todo">${todo.todo}</label><button>delete</button></div>`)
}

renderTodoList(todoList)
