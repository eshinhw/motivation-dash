const clock = document.querySelector("#clock");

function getClock() {
  // Hard way of displaying a real time clock
  const date = new Date();
  let hours = date.getHours();
  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  } else {
    hours = hours.toString().padStart(2, "0");
  }
  let minutes = date.getMinutes().toString().padStart(2, "0");

  clock.innerText = `${hours}:${minutes}`;
}

getClock();

// Run getClock() every 1 second to make the clock look like real time
setInterval(getClock, 1000);
