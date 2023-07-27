import displayWeatherData from "./display-weather-data";
import "./style.css";

const getDataBtn = document.getElementById("getDataBtn"); // Get the button element
getDataBtn.addEventListener("click", displayWeatherData);
