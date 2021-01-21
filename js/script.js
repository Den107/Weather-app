const API_KEY = 'b174da9a7b3ac76acab005bff0c7db1e';
const weatherBlock = document.querySelector('.weather-block'),
    cityName = weatherBlock.querySelector('.weather-block__city-name'),
    cityTemp = weatherBlock.querySelector('.weather-block__temp'),
    cityWeather = weatherBlock.querySelector('.weather-block__cloudy'),
    icon = weatherBlock.querySelector('.weather-block__icon'),
    searchForm = document.querySelector('.search-form'),
    searchCity = searchForm.querySelector('.search-form__input'),
    searchBtn = searchForm.querySelector('.search-form__button');

function clear() {
    cityName.textContent = '';
    cityTemp.textContent = '';
    cityWeather.textContent = '';
    icon.textContent = '';
}

function correctNameLength() {
    if (cityName.textContent.length > 10) {
        cityName.style.fontSize = 30 + 'px';
    } else {
        cityName.style.fontSize = 40 + 'px';
    }
}

clear();
getWheatherByCityName();
function getWheatherByCityName(city = 'London') {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(function (resp) { return resp.json(); })
        .then(function (data) {
            console.log(data);
            cityName.textContent = data.name;
            correctNameLength();
            cityTemp.innerHTML = `${Math.floor(data.main.temp - 273.15)}&degC`;
            cityWeather.textContent = data.weather[0].main;
            icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">`;
        })
        .catch(function () {
            console.log(new Error('error'));
        });
}

function getWheatherByID(id = 'London') {
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}`)
        .then(function (resp) { return resp.json(); })
        .then(function (data) {
            console.log(data);
            cityName.textContent = data.name;
            correctNameLength();
            cityTemp.innerHTML = `${Math.floor(data.main.temp - 273.15)}&degC`;
            cityWeather.textContent = data.weather[0].main;
            icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">`;
        })
        .catch(function () {
            console.log(new Error('error'));
        });
}

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    clear();
    searchForm.classList.add('animate-form');
    weatherBlock.classList.add('animate-block');
    let request = searchCity.value.toLowerCase();
    if (request === '') {
        request = 'London';
    }
    if (!request) {
        searchCity.attributes.placeholder.textContent = 'Insert city name';
    } else if (isNaN(Number(request))) {
        getWheatherByCityName(request);
    } else {
        getWheatherByID(request);
    }
});







