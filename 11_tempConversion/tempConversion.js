const convertToCelsius = function(temp) {
  const celsiusTemp = (temp - 32) * (5/9);
  return parseFloat(celsiusTemp.toFixed(1)); //rounds converted temp to 1 decimal place
};

const convertToFahrenheit = function(temp) {
  const fahrenheitTemp = temp * (9/5) + 32;
  return parseFloat(fahrenheitTemp.toFixed(1)); //rounds converted temp to 1 decimal place
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
