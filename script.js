/* const API = `https://api.openweathermap.org/data/2.5/weather?
q=${city}&appid=${API_KEY}&units=metric` */
/* const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` */

const API_KEY = `eba54dd535fbe547450cfa5cbf0d180b`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

/* get weather data from API */
const getWeather = async (city) => {
    weather.innerHTML = '<h2> Loading... </h2>'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

/* show weather data dynamically in html */
const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = '<h2>City Not Found</h2>'
        return;
    }
    weather.innerHTML = `
            <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather">
            </div>
            <div>
                <h2>${data.main.temp} <span>&#8451;</span></h2>
                <h4>${data.weather[0].main}</h4>
            </div>
        `
}

/* input city data in form and get the value */
form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)

