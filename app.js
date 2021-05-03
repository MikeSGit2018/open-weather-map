/**
 * Entry point to openweathermap api test app
 * Usage: 
 * node app axios
 * node app request
 */

const yargs = require("yargs");
const owmRequest = require("./weather/owmRequest.js");
const owmAxios = require("./weather/owmAxios.js");

const argv = yargs
  .command('request', 'Call openweather using request')
  .command('axios', 'Call openweather using axios')
  .help()
  .argv;

// Pull argument from command
var command = argv._[0];

const lat = 44.9757;
const long = -93.2726;

if (command === "request") {
    owmRequest.getWeather(lat, long, callback);
} else if (command === "axios") {
    owmAxios.getWeatherAxios(lat, long, callback);
} else {
    console.log(`Invalid command: ${command}`);
}

function callback(city, temperature, message) {
    console.log(`Temperature in ${city} in Farenheit: ${temperature}.  ${message}`);
}
