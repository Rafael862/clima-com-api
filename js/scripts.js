//a8f341a8b7d8298992bf744a43bd1ee8
//variáveis e seleção de elementos
const apikey = "a8f341a8b7d8298992bf744a43bd1ee8";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

//funções
const showWeatherData = (city) => {
    console.log(city);
}

//eventos

searchBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const city = cityInput.value; 

    showWeatherData(city);

});