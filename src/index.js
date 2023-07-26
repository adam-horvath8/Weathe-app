import getData from "./get-weather-data";

const input = document.querySelector("input");
const getDataBtn = document.getElementById("getDataBtn"); // Get the button element

// Add event listener to the button
getDataBtn.addEventListener("click", () => {
  const cityName = input.value; // Get the input value
  console.log(getData(cityName)); // Call getData with the input value as an argument
});
