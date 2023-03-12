/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/closeModals.js":
/*!************************************!*\
  !*** ./src/modules/closeModals.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function closeModals() {
  const weatherContainer = document.querySelector(".weather-container");
  weatherContainer.addEventListener("click", removeWeatherModalWindow);

  function removeWeatherModalWindow(e) {
    if (e.target.classList.contains("fa-circle-xmark")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeModals);


/***/ }),

/***/ "./src/modules/config.js":
/*!*******************************!*\
  !*** ./src/modules/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_KEY": () => (/* binding */ API_KEY)
/* harmony export */ });
const API_KEY = "9855d3f732104d15a6e161134231103"; 


/***/ }),

/***/ "./src/modules/displayLoader.js":
/*!**************************************!*\
  !*** ./src/modules/displayLoader.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function displayLoader() {
  document.querySelector(".preloader").classList.add("display");
  setTimeout(() => {
    document.querySelector(".preloader").classList.remove("display");
  }, 1000);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayLoader);


/***/ }),

/***/ "./src/modules/getCity.js":
/*!********************************!*\
  !*** ./src/modules/getCity.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/modules/config.js");
/* harmony import */ var _displayLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayLoader */ "./src/modules/displayLoader.js");
/* harmony import */ var _setCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setCards */ "./src/modules/setCards.js");




function getCity() {
  const searchBtn = document.querySelector(".fa-magnifying-glass");
  const input = document.querySelector(".input-search");

  searchBtn.addEventListener("click", searchCity);

  function searchCity() {
    const errorMsg =
      "Nazwa miasta musi zawierać co najmniej 3 znaki i nie może zawierać cyfr";
    let text = input.value.trim();
    let cityName = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    if (cityName.length < 3 || /\d/.test(cityName)) {
      input.style = "border: 2px solid #d50000";
      document.querySelector(".text-error").textContent = errorMsg;
      return;
    } else {
      input.style = "none";
      input.value = "";
      getApiData(cityName);
      (0,_displayLoader__WEBPACK_IMPORTED_MODULE_1__["default"])();
      document.querySelector(".text-error").textContent = "";
    }
  }

  document.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      searchCity();
      (0,_displayLoader__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
  });

  //Get Api data

  async function getApiData(city) {
    try {
      let response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${_config__WEBPACK_IMPORTED_MODULE_0__.API_KEY}&q=${city}&days=5`
      );
      let data = await response.json();
      let arrForFiveDays = data.forecast.forecastday;

      const objForMainCity = {
        city: city,
        temperature: Math.ceil(data.current.temp_c),
        humidity: data.current.humidity,
        pressure: data.current.pressure_mb,
        wind: data.current.wind_mph,
        img: data.current.condition.icon,
      };

      const objDataForFiveDays = {
        arrayDays: arrForFiveDays.map((item) =>
          new Date(item.date).toLocaleDateString("pl-PL", { weekday: "long" })
        ),
        arrayMaxTepForFiveDays: arrForFiveDays.map((item) =>
          Math.ceil(item.day.maxtemp_c)
        ),
        arrayMinTepForFiveDays: arrForFiveDays.map((item) =>
          Math.ceil(item.day.mintemp_c)
        ),
        arrayDaysIcon: arrForFiveDays.map((item) => item.day.condition.icon),
      };
      (0,_setCards__WEBPACK_IMPORTED_MODULE_2__["default"])(objForMainCity, objDataForFiveDays);
    } catch (err) {
      alert(err);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCity);


/***/ }),

/***/ "./src/modules/setCards.js":
/*!*********************************!*\
  !*** ./src/modules/setCards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function setCards(objForMainCity, objDataForFiveDays) {
  let { city, temperature, humidity, pressure, wind, img } = objForMainCity;
  let {
    arrayDays,
    arrayMaxTepForFiveDays,
    arrayMinTepForFiveDays,
    arrayDaysIcon,
  } = objDataForFiveDays;
  class WeatherCards {
    constructor(
      city,
      temperature,
      humidity,
      pressure,
      wind,
      img,
      arrayDays,
      arrayMaxTepForFiveDays,
      arrayMinTepForFiveDays,
      arrayDaysIcon,
      parentSelector
    ) {
      (this.city = city),
        (this.temperature = temperature),
        (this.humidity = humidity),
        (this.pressure = pressure),
        (this.wind = wind),
        (this.img = img),
        (this.arrayDays = arrayDays),
        (this.arrayMaxTepForFiveDays = arrayMaxTepForFiveDays),
        (this.arrayMinTepForFiveDays = arrayMinTepForFiveDays),
        (this.arrayDaysIcon = arrayDaysIcon),
        (this.parent = document.querySelector(parentSelector));
    }

    render() {
      const element = document.createElement("div");
      element.setAttribute("class", "weather-modal-window");
      element.innerHTML = `
            <div class="close-btn">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
            <div class="main-city">
                <div class="container-for-city-title">
                  <img class="main-img" src="${this.img}" alt="icon">
                  <div>
                    <p class="city-name">${this.city} <i class="fa-solid fa-circle-dot"></i></p>
                    <p class="temperature-of-city">${this.temperature} &#8451;</p>
                  </div>
                </div>
                <div class="container-for-other-values">
                    <div class="weather-sign">
                        <p><i class="fa-solid fa-arrow-down"></i> ${this.pressure} hPa</p>
                        <p><i class="fa-sharp fa-solid fa-droplet"></i> ${this.humidity}%</p>
                        <p><i class="fa-solid fa-wind"></i> ${this.wind} m/s</p>
                    </div>
                </div>
            </div>
            <div class="container-for-five-days">
                <div class="box">
                    <p class="day">${this.arrayDays[0]}</p>
                    <img  class="image-for-each-day" src="${this.arrayDaysIcon[0]}" alt="weather icon">
                    <p class="min">min: ${this.arrayMinTepForFiveDays[0]} &#8451;</p>
                    <p class="max">max: ${this.arrayMaxTepForFiveDays[0]} &#8451;</p>
                </div>
                <div class="box">
                    <p class="day">${this.arrayDays[1]}</p>
                    <img  class="image-for-each-day" src="${this.arrayDaysIcon[1]}" alt="weather icon">
                    <p class="min">min: ${this.arrayMinTepForFiveDays[1]} &#8451;</p>
                    <p class="max">max: ${this.arrayMaxTepForFiveDays[1]} &#8451;</p>
                </div>
                <div class="box">
                    <p class="day">${this.arrayDays[2]}</p>
                    <img  class="image-for-each-day" src="${this.arrayDaysIcon[2]}" alt="weather icon">
                    <p class="min">min: ${this.arrayMinTepForFiveDays[2]} &#8451;</p>
                    <p class="max">max: ${this.arrayMaxTepForFiveDays[2]} &#8451;</p>
                </div>
                <div class="box">
                    <p class="day">${this.arrayDays[3]}</p>
                    <img  class="image-for-each-day" src="${this.arrayDaysIcon[3]}" alt="weather icon">
                    <p class="min">min: ${this.arrayMinTepForFiveDays[3]} &#8451;</p>
                    <p class="max">max: ${this.arrayMaxTepForFiveDays[3]} &#8451;</p>
                </div>
                <div class="box">
                    <p class="day">${this.arrayDays[4]}</p>
                    <img  class="image-for-each-day" src="${this.arrayDaysIcon[4]}" alt="weather icon">
                    <p class="min">min: ${this.arrayMinTepForFiveDays[4]} &#8451;</p>
                    <p class="max">max: ${this.arrayMaxTepForFiveDays[4]} &#8451;</p>
                </div>
            </div>`;
      this.parent.append(element);
    }
  }

  new WeatherCards(
    city,
    temperature,
    humidity,
    pressure,
    wind,
    img,
    arrayDays,
    arrayMaxTepForFiveDays,
    arrayMinTepForFiveDays,
    arrayDaysIcon,
    ".weather-container"
  ).render();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCards);


/***/ }),

/***/ "./src/modules/startSearch.js":
/*!************************************!*\
  !*** ./src/modules/startSearch.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function startSearch() {
  const addBtn = document.querySelector(".add-btn");
  const closeBtn = document.querySelector(".fa-circle-xmark");
  const searchModalWindow = document.querySelector(".find-conatiner");
  const input = document.querySelector(".input-search");

  addBtn.addEventListener("click", () => {
    searchModalWindow.classList.add("show");
    searchModalWindow.classList.remove("hide");
  });

  function closeModalWindow() {
    searchModalWindow.classList.add("hide");
    searchModalWindow.classList.remove("show");
    input.value = "";
    input.style = "none";
    document.querySelector(".text-error").textContent = "";
  }

  closeBtn.addEventListener("click", closeModalWindow);

  closeBtn.addEventListener("click", closeModalWindow);

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && searchModalWindow.classList.contains("show")) {
      closeModalWindow();
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startSearch);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_startSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/startSearch */ "./src/modules/startSearch.js");
/* harmony import */ var _modules_getCity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getCity */ "./src/modules/getCity.js");
/* harmony import */ var _modules_closeModals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/closeModals */ "./src/modules/closeModals.js");






window.addEventListener("DOMContentLoaded", () => {


(0,_modules_startSearch__WEBPACK_IMPORTED_MODULE_0__["default"])(); 
(0,_modules_getCity__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_closeModals__WEBPACK_IMPORTED_MODULE_2__["default"])();

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

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map