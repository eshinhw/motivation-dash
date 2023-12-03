const loginForm = document.querySelector("form");
const loginInput = document.querySelector("#name_input");
const greeting = document.querySelector("h1");
const savedUsername = localStorage.getItem("username");

function onFormSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add("hidden");
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Good morning, ${username}`;
  greeting.classList.remove("hidden");
}

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove("hidden");
  // hide the greeting
  loginForm.addEventListener("submit", onFormSubmit);
} else {
  // show the greeting
  // hide the form
  paintGreeting(savedUsername);
}
