const clock = document.querySelector("#clock");

function getClock() {
  // Hard way of displaying a real time clock
  // const date = new Date();
  // let hours = date.getHours();
  // let minutes = date.getMinutes();
  // let seconds = date.getSeconds().toString().padStart(2, "0");
  // clock.innerText = `${hours - 12}:${minutes}:${seconds}`;

  // Simple way using toLocaleTimeString()
  clock.innerText = new Date().toLocaleTimeString();
}

getClock();

// Run getClock() every 1 second to make the clock look like real time
setInterval(getClock, 1000);
