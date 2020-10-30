const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

function addTodo(event) {
    event.preventDefault();

    // div 태그 만들기
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // li 태그 만들기
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    // local에 저장하기
    saveLocalTodos(todoInput.value);

    // div 태그 안에 li 태그 넣기
    todoDiv.appendChild(newTodo);

    // check 버튼 만들기
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

function deleteCheck(event) {
    const item = event.target;

    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');

        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    }

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach((todo) => {
        switch (event.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}