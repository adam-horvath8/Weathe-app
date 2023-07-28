import getData from "./get-weather-data";
import createCardElement from "./create-card-elemet";
import imgSources from "./img-sources.js";
import createPopup from "./create-popup";

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
      relevantImage,
      currentWeatherData.humidity,
      currentWeatherData.wind
    );
    main.appendChild(card);
  } catch (error) {
    console.error("Error fetching data:", error);
    const popup = createPopup("Please enter valid city name");
    main.appendChild(popup);
    setTimeout(() => {
      popup.remove();
    }, 2000);
  }
}

export default displayWeatherData;

function capitalizeFirstLetter(inputString) {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

function addrelevantImage(currentWeather) {
  const fogDescription = [
    "mist",
    "smoke",
    "haze",
    "sand/dust whirls",
    "fog",
    "sand",
    "dust",
    "volcanic ash",
    "squalls",
    "tornado",
  ];

  if (currentWeather.description.includes("thunderstorm")) {
    return imgSources.thunderstorm;
  } else if (
    currentWeather.description.includes("rain") ||
    currentWeather.description.includes("drizzle")
  ) {
    return imgSources.rain;
  } else if (currentWeather.description === "clear sky") {
    return imgSources.clearSky;
  } else if (currentWeather.description.includes("clouds")) {
    return imgSources.overcastCloud;
  } else if (
    currentWeather.description.includes("snow") &&
    !currentWeather.description.includes("rain")
  ) {
    return imgSources.snow;
  } else {
    fogDescription.forEach((word) => {
      if (currentWeather.description === word) {
        return imgSources.fog;
      }
    });
    return imgSources.fog;
  }
}
