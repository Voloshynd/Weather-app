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

export default setCards;
