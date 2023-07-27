import getData from "./get-weather-data";
import createCardElement from "./create-card-elemet";
import imgSources from "./img-sources.js";

const input = document.querySelector("input");
const main = document.querySelector("main");

async function displayWeatherData() {
  try {
    main.textContent = "";

    const cityName = input.value;

    const capitalizedCityName = capitalizeFirstLetter(cityName);

    const currentWeatherData = await getData(cityName);

    const roundedTemperature = Math.round(currentWeatherData.temperature);

    const relevantImage = addrelevantImage(currentWeatherData);

    const card = createCardElement(
      capitalizedCityName,
      roundedTemperature,
      currentWeatherData.description,
      relevantImage
    );
    main.appendChild(card);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default displayWeatherData;

function capitalizeFirstLetter(inputString) {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

function addrelevantImage(currentWeather) {
  switch (currentWeather.description) {
    case "overcast cloud":
      return imgSources.overcastCloud;
      break;
    case "clear sky":
      return imgSources.clearSky;
      break;
    case currentWeather.description.match(/\bthunderstorm\b/i !== null):
      return;
      break;
    case currentWeather.description.match(/\brain\b/i !== null):
      return imgSources.rain;
  }
}
