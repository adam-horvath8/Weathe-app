import displayWeatherData from "./display-weather-data";
import logo from "./images/amcharts_weather_icons_1.0.0/animated/weather_sunset.svg";
import "./style.css";

const getDataBtn = document.getElementById("getDataBtn"); // Get the button element
getDataBtn.addEventListener("click", displayWeatherData);
