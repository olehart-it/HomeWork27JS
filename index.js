const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";

const temperatureElement = document.getElementById("temperature");
const pressureElement = document.getElementById("pressure");
const descriptionElement = document.getElementById("description");
const humidityElement = document.getElementById("humidity");
const windSpeedElement = document.getElementById("windSpeed");
const windDirectionElement = document.getElementById("windDirection");
const iconElement = document.getElementById("weatherIcon");

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    
    const temperature = data.main.temp;
    const pressure = data.main.pressure;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const windDirection = data.wind.deg;
    const iconCode = data.weather[0].icon;

    temperatureElement.textContent = `${temperature}`;
    pressureElement.textContent = `${pressure}`;
    descriptionElement.textContent = `${description}`;
    humidityElement.textContent = `${humidity}`;
    windSpeedElement.textContent = `${windSpeed}`;
    windDirectionElement.textContent = `${windDirection}`;

    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    iconElement.src = iconUrl;
  })
  .catch(error => {
    console.error("error", error);
  });
