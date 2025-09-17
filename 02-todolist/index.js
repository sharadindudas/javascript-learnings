const form = document.querySelector("form");
const todoInput = document.querySelector(".todo-input");
const todoListContainer = document.querySelector(".todolist");

let todos = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoInputValue = todoInput.value;

    if (todoInputValue.length === 0) {
        alert("Please provide a todo name");
        return;
    } else {
        const newTodo = {
            id: Date.now(),
            name: todoInputValue,
            isCompleted: false,
        };
        todos = [...todos, newTodo];
        renderTodos();
        saveTodos();
        todoInput.value = "";
    }
});

function renderTodos() {
    todoListContainer.innerHTML = "";

    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.classList.add("todo-item");
        li.innerHTML = `
        <span>${todo.name}</span>
        <div class="todo-buttons">
            <button class="edit-todo todo-btn">
                <img
                    src="./assets/edit-icon.svg"
                    alt="edit-icon"
                    style="width: 20px; height: 20px"
                    loading="lazy"
                />
            </button>
            <button class="delete-todo todo-btn">
                <img
                    src="./assets/delete-icon.svg"
                    alt="delete-icon"
                    style="width: 20px; height: 20px"
                    loading="lazy"
                />
            </button>
        </div>
        `;

        const editTodo = li.querySelector(".edit-todo");
        editTodo.addEventListener("click", () => {
            const newTodoName = prompt("Edit your todo:", todo.name);
            if (newTodoName && newTodoName.trim().length > 0) {
                todo.name = newTodoName.trim();
                renderTodos();
                saveTodos();
            }
        });

        const deleteTodo = li.querySelector(".delete-todo");
        deleteTodo.addEventListener("click", () => {
            todos = todos.filter((t) => t.id !== todo.id);
            renderTodos();
            saveTodos();
        });

        todoListContainer.append(li);
    });
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
        renderTodos();
    }
}

loadTodos();
