const form = document.querySelector("form");
const todoListContainer = document.querySelector(".todolist");

let todos = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoName = e.target[0].value.trim();
    if (!todoName && todoName.length === 0) {
        alert("Please provide a todo name");
        return;
    } else {
        const newTodo = {
            id: crypto.randomUUID(),
            name: todoName,
            isCompleted: false
        };
        todos = [...todos, newTodo];
        renderTodos();
        saveTodos();
        form.reset();
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
                <button class="todo-btn edit-todo-btn">
                    <img
                        src="./assets/edit-icon.svg"
                        alt="edit-icon"
                        style="width: 20px; height: 20px"
                        loading="lazy"
                    />
                </button>
                <button class="todo-btn delete-todo-btn">
                    <img
                        src="./assets/delete-icon.svg"
                        alt="delete-icon"
                        style="width: 20px; height: 20px"
                        loading="lazy"
                    />
                </button>
            </div>
        `;

        const editTodoBtn = li.querySelector(".edit-todo-btn");
        editTodoBtn.addEventListener("click", () => {
            const newTodoName = prompt(
                "Please provide the new todo name",
                todo.name
            ).trim();
            if (newTodoName && newTodoName.length > 0) {
                todo.name = newTodoName;
                renderTodos();
                saveTodos();
            }
        });

        const deleteTodoBtn = li.querySelector(".delete-todo-btn");
        deleteTodoBtn.addEventListener("click", () => {
            todos = todos.filter((t) => t.id !== todo.id);
            renderTodos();
            saveTodos();
        });

        todoListContainer.appendChild(li);
    });
}

function saveTodos() {
    if (todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}

function loadTodos() {
    const existingTodos = localStorage.getItem("todos");
    if (saveTodos) {
        todos = JSON.parse(existingTodos);
        renderTodos();
    }
}

loadTodos();
