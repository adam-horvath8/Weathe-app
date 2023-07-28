import getFilteredData from "./filter-data";
import createPopup from "./create-popup";

async function getData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ed1e8be3ef694adf921ec1a001a8844&units=metric`,
      { mode: "cors" }
    );
    const data = await response.json();
    const processedData = getFilteredData(data);
    return processedData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default getData;
