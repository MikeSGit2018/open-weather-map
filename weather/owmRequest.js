/**
 * API call to openweathermap
 * api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
 */

const request = require("request");
const utilities = require("../utilities/utilities.js");
const apiKey = utilities.apiKey;

const getWeather = (lat, lon, callback) => {
    request({
       url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,
       json: true
    }, (error, response, body) => {
      if(response) {
          console.log("headers:",response.headers);
          console.log("statusCode:",response.statusCode);
      }
       if(error) {
          callback(undefined, undefined, 'Unable to connect to the server.');
          console.log("error:",error);
       } else {
           const temperature = utilities.getTempInFarenheit(body.main.temp);
           callback(body.name, temperature, "uses Request");
       }
    });
 };

module.exports = {
    getWeather
}