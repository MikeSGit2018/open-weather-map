/**
 * Utilities for openweathermap API
 * https://openweathermap.org/current#geo
 * api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=89c9ffbbb80ccfc3398804e05f7a49ee
 * 273.15 Kelvin is 0 celsius
 */

const apiKey = "89c9ffbbb80ccfc3398804e05f7a49ee";
const zeroDegKelvin = 273.15;

const getTempInCelsius = (tempDegKelvin) => {
    return tempDegKelvin - zeroDegKelvin;
}

const getTempInFarenheit = (tempDegKelvin) => {
    return getTempInCelsius(tempDegKelvin) * 1.8 + 32;
}

module.exports = {
    apiKey,
    getTempInCelsius,
    getTempInFarenheit
}

/**
 * Response format:
 */

/*
Body: {
  coord: { lon: -93.265, lat: 44.9777 },
  weather: [
    { id: 701, main: 'Mist', description: 'mist', icon: '50d' },
    { id: 600, main: 'Snow', description: 'light snow', icon: '13d' }
  ],
  base: 'stations',
  main: {
    temp: 271.6,
    feels_like: 264.23,
    temp_min: 270.93,
    temp_max: 272.59,
    pressure: 1010,
    humidity: 93
  },
  visibility: 2012,
  wind: { speed: 7.2, deg: 330 },
  clouds: { all: 90 },
  dt: 1614533781,
  sys: {
    type: 1,
    id: 4984,
    country: 'US',
    sunrise: 1614516741,
    sunset: 1614556744
  },
  timezone: -21600,
  id: 5037649,
  name: 'Minneapolis',
  cod: 200
}

*/
