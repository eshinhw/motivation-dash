const weatherIcon = document.querySelector("#weather-icon");
const temperature = document.querySelector("#temperature");
const city = document.querySelector("#city");
const API_KEY = "9fa91fc9f75f05258b5ad7dfa428a3dc";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const iconCode = data.weather[0].icon;

      const temp = Math.floor(parseInt(data.main.temp));

      const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      const imgTag = document.createElement("img");
      imgTag.src = iconURL;
      imgTag.style.width = "45px";
      imgTag.style.height = "45px";
      weatherIcon.appendChild(imgTag);
      temperature.innerText = `${temp}°C`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
