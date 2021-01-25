// Soal 2
function fahrenheitHelper(suhu) {
  return suhu / (9/5);
}

function celciusHelper(suhu) {
  return suhu * (9/5)
}

function getReturnCelcius(fahrenheit) {
  document.getElementById('celcius-result').innerHTML = Math.round(fahrenheitHelper(fahrenheit - 32)) + "°C";
}

function getReturnFahrenheit(celcius) {
  document.getElementById('fahrenheit-result').innerHTML = Math.round(celciusHelper(celcius + 32)) + "°F"
}



