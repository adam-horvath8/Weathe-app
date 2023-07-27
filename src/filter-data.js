async function getFilteredData(data) {
  try {
    const filteredData = {
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
    };
    return filteredData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default getFilteredData;
