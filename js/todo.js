const toDoList = document.querySelector("#todo-list");
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
let todos = [];

function loadToDo() {
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  if (savedTodos !== null) {
    todos = savedTodos;
    todos.forEach(paintToDo);
  }
}

function saveToDo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.id = newToDo.id;
  span.innerText = newToDo.text;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", handleDeleteTodo);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  toDoList.appendChild(li);
}

function handleDeleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDo();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const input = toDoInput.value;
  const currTodo = { id: Date.now(), text: input };
  toDoInput.value = "";
  paintToDo(currTodo);
  todos.push(currTodo);
  saveToDo();
}

loadToDo();

toDoForm.addEventListener("submit", handleToDoSubmit);
