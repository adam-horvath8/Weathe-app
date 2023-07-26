import getData from "./get-weather-data";

async function getFilteredData(data) {
  try {
    // const data = await getData(); // Wait for the data to be fetched
    const filteredData = {
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
    };
    return filteredData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to be caught by the caller if needed
  }
}

export default getFilteredData