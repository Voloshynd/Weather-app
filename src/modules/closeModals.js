function closeModals(){
    const weatherContainer = document.querySelector(".weather-container");
    weatherContainer.addEventListener("click", removeWeatherModalWindow);
  
    function removeWeatherModalWindow(e) {
      if (e.target.classList.contains("fa-circle-xmark")) {
        e.target.parentElement.parentElement.remove();
      }
    }
}

export default closeModals;