//a8f341a8b7d8298992bf744a43bd1ee8
//variáveis e seleção de elementos
const apikey = "a8f341a8b7d8298992bf744a43bd1ee8";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const watherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")

//funções

const getWeathData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&unitis=metric&appid=${apikey}&lang=pt_br`
        const res = await fetch(apiWeatherURL)
        const data = await res.json()
        return data
}

const showWeatherData = async (city) => {
    const data = await getWeathData(city);
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;
    
    console.log(data);

}

//eventos

searchBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const city = cityInput.value; 

    showWeatherData(city);

});