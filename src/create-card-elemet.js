import imgSources from "./img-sources.js";

function createCardElement(
  name,
  temperature,
  description,
  imgDescription,
  humidity,
  wind
) {
  const card = document.createElement("div");
  card.id = "card";
  card.className = "card";

  const cityNameDiv = document.createElement("div");
  cityNameDiv.id = "city-name-div";
  cityNameDiv.classList.add("city-name-div");

  const infoDiv = document.createElement("div");
  infoDiv.id = "info-div";
  infoDiv.classList.add("info-div");

  card.append(cityNameDiv, infoDiv);

  const cityNameHeading = document.createElement("h1");
  cityNameHeading.textContent = name;
  cityNameHeading.classList.add("city-name-heading");

  const temperatureSpan = document.createElement("span");
  temperatureSpan.textContent = temperature + " °C";
  temperatureSpan.classList.add("temperature-span");

  cityNameDiv.append(cityNameHeading, temperatureSpan);

  // left top div
  const leftInfoDiv = document.createElement("div");
  leftInfoDiv.classList.add("left-info-div");

  const leftInfoTop = document.createElement("div");
  leftInfoTop.id = "left-info-top";
  leftInfoTop.classList.add("left-info-top");
  leftInfoDiv.appendChild(leftInfoTop);

  const imgLeftTop = document.createElement("img");
  imgLeftTop.id = "img-left-top";
  imgLeftTop.classList.add("img-left-top");
  imgLeftTop.src = imgDescription;
  leftInfoTop.appendChild(imgLeftTop);

  const spanLeftTop = document.createElement("span");
  spanLeftTop.textContent = description;
  spanLeftTop.classList.add("span-left-top");
  leftInfoTop.appendChild(spanLeftTop);

  const leftInfoBottom = document.createElement("div");
  leftInfoBottom.id = "left-info-bottom";
  leftInfoBottom.classList.add("left-info-bottom");
  leftInfoDiv.appendChild(leftInfoBottom);

  const imgLeftBottom = document.createElement("img");
  imgLeftBottom.classList.add("humidity-img");
  imgLeftBottom.src = imgSources.humidity;
  leftInfoBottom.appendChild(imgLeftBottom);

  const spanLeftBottom = document.createElement("span");
  spanLeftBottom.classList.add("span-left-bottom");
  spanLeftBottom.textContent = humidity + " %";
  leftInfoBottom.appendChild(spanLeftBottom);

  const rigthInfoDiv = document.createElement("div");
  rigthInfoDiv.classList.add("rigth-info-div");

  const windDiv = document.createElement("div");
  windDiv.classList.add("wind-div");
  rigthInfoDiv.appendChild(windDiv);

  const windImg = document.createElement("img");
  windImg.classList.add("wind-img");
  windImg.src = imgSources.wind;
  windDiv.appendChild(windImg);

  const windSpan = document.createElement("span");
  windSpan.classList.add("wind-span");
  windSpan.textContent = wind + " m/s";
  windDiv.appendChild(windSpan);

  infoDiv.append(leftInfoDiv, rigthInfoDiv);

  return card;
}
export default createCardElement;
