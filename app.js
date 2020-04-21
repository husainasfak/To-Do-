//Selectors
const input = document.querySelector('.input-field');
const button = document.querySelector('.button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-selection');

//Event Listener

button.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

//Functions
function addTodo(e) {
    e.preventDefault();
    //creating new div inside ul
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create item list
    const item = document.createElement('li');
    item.innerText=input.value;
    item.classList.add('todo-item');
    //append itemlist in div
    todoDiv.appendChild(item);
    //creating checked element
    const checked = document.createElement('button');
    checked.innerHTML = '<i class="fas fa-check"></i>';
    checked.classList.add('checked');
    //add to div
    todoDiv.appendChild(checked);
    //creating delete element
    const trash = document.createElement('button');
    trash.classList.add('trash');
    trash.innerHTML = '<i class="fas fa-trash-alt"></i>';
    //add to div
    todoDiv.appendChild(trash);
    //Now finally append div in todo list
    todoList.appendChild(todoDiv);
    //clear input value
    input.value = '';
    
}
//Delete and Check Function
function deleteCheck(e) {
    const item = e.target;
    if(item.classList[0]==='trash'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        //animation then remove
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
        
    }
    if(item.classList[0]==='checked'){
        const todo = item.parentElement;
        todo.classList.toggle('completed-1');
    }
    
}
//filter todo
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display='flex';
                break;
            case "completed":
                //contains --> completed-1 is classname 
                if(todo.classList.contains('completed-1')){
                    todo.style.display='flex';
                }
                else{
                    todo.style.display='none';
                }
                break;
            case "notcompleted":
                if(!todo.classList.contains('completed-1')){
                    todo.style.display='flex';
                }
                else{
                    todo.style.display='none';
                }
                break;
        }
    })

}