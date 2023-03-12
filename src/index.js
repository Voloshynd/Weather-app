import startSearch from "./modules/startSearch";
import getCity from "./modules/getCity";
import closeModals from "./modules/closeModals";



window.addEventListener("DOMContentLoaded", () => {


startSearch(); 
getCity();
closeModals();

  // const addBtn = document.querySelector(".add-btn");
  // const closeBtn = document.querySelector(".fa-circle-xmark");
  // const searchModalWindow = document.querySelector(".find-conatiner");
  // const input = document.querySelector(".input-search");
  // const errorText = document.querySelector(".text-error");
  // const preloader = document.querySelector(".preloader");
  // const searchBtn = document.querySelector(".fa-magnifying-glass");

  // addBtn.addEventListener("click", () => {
  //   searchModalWindow.classList.add("show");
  //   searchModalWindow.classList.remove("hide");
  // });


 

  // function closeModalWindow() {
  //   searchModalWindow.classList.add("hide");
  //   searchModalWindow.classList.remove("show");
  //   input.value = "";
  //   input.style = "none";
  //   errorText.textContent = "";
  // }

  // closeBtn.addEventListener("click", closeModalWindow);

  // document.addEventListener("keydown", (e) => {
  //   if (e.code === "Escape" && searchModalWindow.classList.contains("show")) {
  //     closeModalWindow();
  //   }
  // });

  // // Modal search window support
  // searchBtn.addEventListener("click", searchCity);

  // // Show loader
  // function displayLoader() {
  //   preloader.classList.add("display");
  //   setTimeout(() => {
  //     preloader.classList.remove("display");
  //   }, 1000);
  // }


  // function searchCity() {
  //   const errorMsg =
  //     "Nazwa miasta musi zawierać co najmniej 3 znaki i nie może zawierać cyfr";
  //   let text = input.value.trim();
  //   let cityName = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  //   if (cityName.length < 3 || /\d/.test(cityName)) {
  //     input.style = "border: 2px solid #d50000";
  //     errorText.textContent = errorMsg;
  //     return;
  //   } else {
  //     input.style = "none";
  //     input.value = "";
  //     getApiData(cityName);
  //     displayLoader();
  //     errorText.textContent = "";
  //   }
  // }

  // document.addEventListener("keydown", (e) => {
  //   if (e.code === "Enter") {
  //     searchCity();
  //     displayLoader();
  //   }
  // });

  // //Get Api data

  // async function getApiData(city) {
  //   try {
  //     let response = await fetch(
  //       `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5`
  //     );
  //     let data = await response.json();
  //     let arrForFiveDays = data.forecast.forecastday;

  //     const objForMainCity = {
  //       city: city,
  //       temperature: Math.ceil(data.current.temp_c),
  //       humidity: data.current.humidity,
  //       pressure: data.current.pressure_mb,
  //       wind: data.current.wind_mph,
  //       img: data.current.condition.icon,
  //     };

  //     const objDataForFiveDays = {
  //       arrayDays: arrForFiveDays.map((item) =>
  //         new Date(item.date).toLocaleDateString("pl-PL", { weekday: "long" })
  //       ),
  //       arrayMaxTepForFiveDays: arrForFiveDays.map((item) =>
  //         Math.ceil(item.day.maxtemp_c)
  //       ),
  //       arrayMinTepForFiveDays: arrForFiveDays.map((item) =>
  //         Math.ceil(item.day.mintemp_c)
  //       ),
  //       arrayDaysIcon: arrForFiveDays.map((item) => item.day.condition.icon),
  //     };
  //     setCard(objForMainCity, objDataForFiveDays);
  //     // hideLoader();
  //   } catch (err) {
  //     alert(err);
  //   }
  // }

  // // Create cards with weather

  // function setCard(objForMainCity, objDataForFiveDays) {
  //   let { city, temperature, humidity, pressure, wind, img } = objForMainCity;
  //   let {
  //     arrayDays,
  //     arrayMaxTepForFiveDays,
  //     arrayMinTepForFiveDays,
  //     arrayDaysIcon,
  //   } = objDataForFiveDays;
  //   class WeatherCards {
  //     constructor(
  //       city,
  //       temperature,
  //       humidity,
  //       pressure,
  //       wind,
  //       img,
  //       arrayDays,
  //       arrayMaxTepForFiveDays,
  //       arrayMinTepForFiveDays,
  //       arrayDaysIcon,
  //       parentSelector
  //     ) {
  //       (this.city = city),
  //         (this.temperature = temperature),
  //         (this.humidity = humidity),
  //         (this.pressure = pressure),
  //         (this.wind = wind),
  //         (this.img = img),
  //         (this.arrayDays = arrayDays),
  //         (this.arrayMaxTepForFiveDays = arrayMaxTepForFiveDays),
  //         (this.arrayMinTepForFiveDays = arrayMinTepForFiveDays),
  //         (this.arrayDaysIcon = arrayDaysIcon),
  //         (this.parent = document.querySelector(parentSelector));
  //     }

  //     render() {
  //       const element = document.createElement("div");
  //       element.setAttribute("class", "weather-modal-window");
  //       element.innerHTML = `
  //       <div class="close-btn">
  //           <i class="fa-solid fa-circle-xmark"></i>
  //       </div>
  //       <div class="main-city">
  //           <div class="container-for-city-title">
  //             <img class="main-img" src="${this.img}" alt="icon">
  //             <div>
  //               <p class="city-name">${this.city} <i class="fa-solid fa-circle-dot"></i></p>
  //               <p class="temperature-of-city">${this.temperature} &#8451;</p>
  //             </div>
  //           </div>
  //           <div class="container-for-other-values">
  //               <div class="weather-sign">
  //                   <p><i class="fa-solid fa-arrow-down"></i> ${this.pressure} hPa</p>
  //                   <p><i class="fa-sharp fa-solid fa-droplet"></i> ${this.humidity}%</p>
  //                   <p><i class="fa-solid fa-wind"></i> ${this.wind} m/s</p>
  //               </div>
  //           </div>
  //       </div>
  //       <div class="container-for-five-days">
  //           <div class="box">
  //               <p class="day">${this.arrayDays[0]}</p>
  //               <img  class="image-for-each-day" src="${this.arrayDaysIcon[0]}" alt="weather icon">
  //               <p class="min">min: ${this.arrayMinTepForFiveDays[0]} &#8451;</p>
  //               <p class="max">max: ${this.arrayMaxTepForFiveDays[0]} &#8451;</p>
  //           </div>
  //           <div class="box">
  //               <p class="day">${this.arrayDays[1]}</p>
  //               <img  class="image-for-each-day" src="${this.arrayDaysIcon[1]}" alt="weather icon">
  //               <p class="min">min: ${this.arrayMinTepForFiveDays[1]} &#8451;</p>
  //               <p class="max">max: ${this.arrayMaxTepForFiveDays[1]} &#8451;</p>
  //           </div>
  //           <div class="box">
  //               <p class="day">${this.arrayDays[2]}</p>
  //               <img  class="image-for-each-day" src="${this.arrayDaysIcon[2]}" alt="weather icon">
  //               <p class="min">min: ${this.arrayMinTepForFiveDays[2]} &#8451;</p>
  //               <p class="max">max: ${this.arrayMaxTepForFiveDays[2]} &#8451;</p>
  //           </div>
  //           <div class="box">
  //               <p class="day">${this.arrayDays[3]}</p>
  //               <img  class="image-for-each-day" src="${this.arrayDaysIcon[3]}" alt="weather icon">
  //               <p class="min">min: ${this.arrayMinTepForFiveDays[3]} &#8451;</p>
  //               <p class="max">max: ${this.arrayMaxTepForFiveDays[3]} &#8451;</p>
  //           </div>
  //           <div class="box">
  //               <p class="day">${this.arrayDays[4]}</p>
  //               <img  class="image-for-each-day" src="${this.arrayDaysIcon[4]}" alt="weather icon">
  //               <p class="min">min: ${this.arrayMinTepForFiveDays[4]} &#8451;</p>
  //               <p class="max">max: ${this.arrayMaxTepForFiveDays[4]} &#8451;</p>
  //           </div>
  //       </div>`;
  //       this.parent.append(element);
  //     }
  //   }

  //   new WeatherCards(
  //     city,
  //     temperature,
  //     humidity,
  //     pressure,
  //     wind,
  //     img,
  //     arrayDays,
  //     arrayMaxTepForFiveDays,
  //     arrayMinTepForFiveDays,
  //     arrayDaysIcon,
  //     ".weather-container"
  //   ).render();
  // }

  // // Close modal weather window
  // const weatherContainer = document.querySelector(".weather-container");
  // weatherContainer.addEventListener("click", removeWeatherModalWindow);

  // function removeWeatherModalWindow(e) {
  //   if (e.target.classList.contains("fa-circle-xmark")) {
  //     e.target.parentElement.parentElement.remove();
  //   }
  // }
});
