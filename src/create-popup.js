function createPopup(message) {
  const popup = document.createElement("div");
  popup.classList.add("popup");

  const popupSpan = document.createElement("span");
  popupSpan.classList.add("popup-span");
  popupSpan.textContent = message;
  popup.appendChild(popupSpan);

  return popup;
}

export default createPopup;
