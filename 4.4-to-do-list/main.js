let todoInput = document.querySelector("#todo-input");
let addTodo = document.querySelector(".btn-primary");
let todoList = document.querySelector(".list-group");

addTodo.setAttribute("disabled", null);
addTodo.disabled = true;

todoInput.addEventListener("input", function (event) {
  if (event.target.value) {
    addTodo.disabled = false;
  } else {
    addTodo.disabled = true;
  }
});

///
let todos = JSON.parse(localStorage.getItem("toDo")) || [];

function listTodo() {
  todoList.innerHTML = "";
  todos.forEach((item) => {
    todoList.innerHTML += `
                  <li
                    class="list-group-item list-group-item-success my-2 d-flex justify-content-between align-items-center rounded"
                  >
                  <input type="checkbox" id="checkbox" />
                    <span>${item.todoText}</span>
                    <div>
                      <button type="button" class="btn btn-success">Edit</button>
                      <button type="button" class="btn btn-danger remove-btn" id=${item.id} onclick=removeTodo(${item.id})>Delete</button>
                    </div>
                  </li> `;
  });
}

addTodo.addEventListener("click", function () {
  let obj = {
    id: Date.now(),
    todoText: todoInput.value,
  };

  todos.push(obj);
  localStorage.setItem("toDo", JSON.stringify(todos));

  listTodo();

  todoInput.value = "";
});

function removeTodo(id) {
  todos = todos.filter((el) => el.id != id);

  localStorage.setItem("toDo", JSON.stringify(todos));
  listTodo();
}




