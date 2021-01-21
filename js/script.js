const API_KEY = 'b174da9a7b3ac76acab005bff0c7db1e';
const weatherBlock = document.querySelector('.weather-block'),
    cityName = weatherBlock.querySelector('.weather-block__city-name'),
    cityTemp = weatherBlock.querySelector('.weather-block__temp'),
    cityWeather = weatherBlock.querySelector('.weather-block__cloudy'),
    icon = weatherBlock.querySelector('.weather-block__icon');
function clear() {
    cityName.textContent = '';
    cityTemp.textContent = '';
    cityWeather.textContent = '';
    icon.textContent = '';
}
clear();
fetch(`http://api.openweathermap.org/data/2.5/weather?q=london&appid=${API_KEY}`)
    .then(function (resp) { return resp.json(); })
    .then(function (data) {
        console.log(data);
        cityName.textContent = data.name;
        cityTemp.innerHTML = `${Math.floor(data.main.temp - 273.15)}&degC`;
        cityWeather.textContent = data.weather[0].main;
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">`;
    })
    .catch(function () {
        console.log(new Error('error'));
    });







