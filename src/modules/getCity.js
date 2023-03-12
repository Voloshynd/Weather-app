import { API_KEY } from "./config";
import displayLoader from "./displayLoader";
import setCards from "./setCards";

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
      displayLoader();
      document.querySelector(".text-error").textContent = "";
    }
  }

  document.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      searchCity();
      displayLoader();
    }
  });

  //Get Api data

  async function getApiData(city) {
    try {
      let response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5`
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
      setCards(objForMainCity, objDataForFiveDays);
    } catch (err) {
      alert(err);
    }
  }
}

export default getCity;
