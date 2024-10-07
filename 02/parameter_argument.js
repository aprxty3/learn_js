function convertCelsiusToFahrenheit(temperature = 50) {
    if (temperature !== undefined) { 
      const temperatureInFahrenheit = 9 / 5 * temperature + 32;
   
      console.log('Hasil konversi:', temperatureInFahrenheit);
    }
  }

    convertCelsiusToFahrenheit(30);
    convertCelsiusToFahrenheit();

    