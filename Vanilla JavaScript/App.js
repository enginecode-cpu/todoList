const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoBtn.addEventListener('click', addTodo);

function addTodo(event) {
    event.preventDefault();

    // div 태그 만들기
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // li 태그 만들기
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    // div 태그 안에 li 태그 넣기
    todoDiv.appendChild(newTodo);

    // check 버튼
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add('complete-btn');

    // div 태그 안에 check 버튼 넣기
    todoDiv.appendChild(completedBtn);

    // delete 버튼
    const deletedBtn = document.createElement('button');
    deletedBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deletedBtn.classList.add('delete-btn');

    // div 태그 안에 delete 버튼 넣기
    todoDiv.appendChild(deletedBtn);

    // ul 태그 안에 넣기
    todoList.appendChild(todoDiv);

    todoInput.value = '';
}