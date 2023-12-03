const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds().toString().padStart(2, "0");

  clock.innerText = `${hours - 12}:${minutes}:${seconds}`;
  // clock.innerText = new Date().toLocaleTimeString();
}

getClock();
setInterval(getClock, 1000);
