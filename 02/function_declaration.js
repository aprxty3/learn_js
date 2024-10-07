function converCelciusToFahrenheit(temperature) {
const temperatureInFahrenheit = 9/5 * temperature + 32;

console.log(`The temperature is ${temperatureInFahrenheit} degrees Fahrenheit`);

return temperatureInFahrenheit;
}

converCelciusToFahrenheit(30);

const temperatureInCelcius = 20;

converCelciusToFahrenheit(temperatureInCelcius);

greetWorld();

function greetWorld() {
  console.log('Hello, world!');
}