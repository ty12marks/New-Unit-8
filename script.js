const axios = require('axios');

// Replace with your actual API keys and endpoint URLs
const WEATHER_API_KEY = 'YOUR_WEATHER_API_KEY';
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${WEATHER_API_KEY}`;

const TRAFFIC_API_KEY = 'YOUR_TRAFFIC_API_KEY';
const TRAFFIC_URL = `https://api.trafficapi.com/anyendpoint?apikey=${TRAFFIC_API_KEY}&location=London`;

function fetchData(url) {
    return axios.get(url).then(response => response.data);
}

function updateUI(elementId, data) {
    document.getElementById(elementId).innerText = JSON.stringify(data, null, 2);
}

async function loadAndDisplayData() {
    try {
        const weatherData = await fetchData(WEATHER_URL);
        updateUI('weather', weatherData);

        const trafficData = await fetchData(TRAFFIC_URL);
        updateUI('traffic', trafficData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

loadAndDisplayData();
