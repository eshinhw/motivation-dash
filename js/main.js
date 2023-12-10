const loginForm = document.querySelector("form");
const loginInput = document.querySelector("#name_input");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem("username");
const quote = document.querySelector("#quote");
const toDoForm = document.querySelector("#todo-form");
const todosFromStorage = JSON.parse(localStorage.getItem("todos"));
const mainFocus = document.querySelector("#main-focus");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");
let todos = [];
let completeBtn;
let deleteBtn;

function onFormSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add("hidden");
  paintGreeting(username);
  quote.classList.add("quote");
  quote.classList.remove("hidden");
  toDoForm.classList.remove("hidden");
}

function paintGreeting(username) {
  const time = new Date();
  const hour = time.getHours();
  if (hour >= 5 && hour <= 10) {
    greeting.innerText = `Good morning, ${username}!`;
  } else if (hour > 11 && hour <= 17) {
    greeting.innerText = `Good afternoon, ${username}!`;
  } else if (hour > 18 && hour <= 20) {
    greeting.innerText = `Good evening, ${username}!`;
  } else {
    greeting.innerText = `Good night, ${username}!`;
  }

  greeting.classList.remove("hidden");
}

function loadToDo() {
  if (todosFromStorage !== null) {
    todos = todosFromStorage;
    paintToDo(todos[0]);
  } else {
    toDoForm.classList.remove("hidden");
  }
}

function saveToDo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  li.addEventListener("mouseover", handleMouseOver);
  li.addEventListener("mouseleave", handleMouseLeave);
  deleteBtn = document.createElement("button");
  completeBtn = document.createElement("button");
  completeBtn.innerHTML = "✅";
  completeBtn.classList.add("hidden");
  deleteBtn.innerHTML = "❌";
  deleteBtn.classList.add("hidden");
  deleteBtn.addEventListener("click", handleDeleteTodo);
  li.appendChild(completeBtn);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  toDoList.appendChild(li);
}

function handleMouseOver(event) {
  completeBtn.classList.remove("hidden");
  deleteBtn.classList.remove("hidden");
}

function handleMouseLeave(event) {
  completeBtn.classList.add("hidden");
  deleteBtn.classList.add("hidden");
}

function handleDeleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDo();
  if (todos.length === 0) {
    toDoForm.classList.remove("hidden");
    mainFocus.classList.add("hidden");
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const input = toDoInput.value;
  const currTodo = { id: Date.now(), text: input };
  toDoInput.value = "";
  paintToDo(currTodo);
  todos.push(currTodo);
  saveToDo();
  toDoForm.classList.add("hidden");
  mainFocus.classList.remove("hidden");
}

if (savedUsername === null) {
  // show the loginForm
  loginForm.classList.remove("hidden");
  // hide the greeting
  loginForm.addEventListener("submit", onFormSubmit);
} else {
  // show the greeting
  // hide the form
  paintGreeting(savedUsername);
  quote.classList.remove("hidden");
  // toDoForm.classList.remove("hidden");
  // console.log(todosFromStorage);
  if (todosFromStorage) {
    mainFocus.classList.remove("hidden");
  }
}

if (todosFromStorage.length > 0) {
  toDoList.classList.remove("hidden");
  loadToDo();
}

if (todosFromStorage.length === 0) {
  toDoForm.classList.remove("hidden");
  mainFocus.classList.add("hidden");
}

toDoForm.addEventListener("submit", handleToDoSubmit);
