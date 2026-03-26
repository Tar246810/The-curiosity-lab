// weather-dashboard/script.js

// OpenWeatherMap API integration
const apiKey = 'YOUR_API_KEY';
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const forecastApiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

// Fetch current weather
async function fetchCurrentWeather(location) {
    try {
        const response = await fetch(`${weatherApiUrl}?q=${location}&appid=${apiKey}&units=metric`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log('Current Weather Data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching current weather:', error);
    }
}

// Fetch 5-day weather forecast
async function fetchForecast(location) {
    try {
        const response = await fetch(`${forecastApiUrl}?q=${location}&appid=${apiKey}&units=metric`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log('5-Day Forecast Data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
}

// Geolocation support
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            console.log('Geolocation coordinates:', latitude, longitude);
            // Optionally fetch weather for this location
        }, error => {
            console.error('Error getting location:', error);
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}

// Usage examples
getLocation(); // Call to get location
fetchCurrentWeather('London'); // Fetch current weather for London
fetchForecast('London'); // Fetch 5-day forecast for London
