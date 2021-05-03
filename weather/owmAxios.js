/**
 * Using the openweathermap API with Axios
 */

const axios = require ("axios");
const utilities = require("../utilities/utilities.js");
const apiKey = utilities.apiKey;

const getWeatherAxios = (lat, lon, callback) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then( (response) => {
        // handle success
        const city = response.data.name;
        const temperature = utilities.getTempInFarenheit(response.data.main.temp);
        callback(city, temperature, "uses Axios");
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
}

module.exports = {
    getWeatherAxios
}