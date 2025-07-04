// // weather.js
// const API_KEY = '345b9292a4801ce824850a0eaeaf3e9d'; // Get from OpenWeatherMap or similar service
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={345b9292a4801ce824850a0eaeaf3e9d}';

// async function getWeatherData(latitude, longitude) {
//     try {
//         const response = await fetch(`${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
//         const data = await response.json();
        
//         return {
//             temperature: data.main.temp,
//             humidity: data.main.humidity,
//             conditions: data.weather[0].main,
//             icon: data.weather[0].icon
//         };
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         return null;
//     }
// }

// function displayWeather(weatherData) {
//     // Update your HTML elements with weather data
//     document.getElementById('weather-temp').textContent = `${weatherData.temperature}°C`;
//     document.getElementById('weather-conditions').textContent = weatherData.conditions;
//     document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${weatherData.icon}.png`;
// }

// Call this when your page loads or when you get geolocation
// navigator.geolocation.getCurrentPosition(position => {
//     getWeatherData(position.coords.latitude, position.coords.longitude)
//         .then(displayWeather);
// });