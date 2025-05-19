document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('weather-container');
    if (!container) return; // Exit if container not found

    // Fetch weather data from Open-Meteo API (Lagos coordinates)
    fetch('https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current_weather=true')
        .then(response => response.json())
        .then(data => {
            if (data.current_weather) {
                const temp = data.current_weather.temperature;
                const wind = data.current_weather.windspeed;
                const weatherHtml = `
                    <p><strong>Temperature:</strong> ${temp}&deg;C</p>
                    <p><strong>Wind Speed:</strong> ${wind} km/h</p>
                    <p><strong>Weather Code:</strong> ${data.current_weather.weathercode}</p>
                `;
                container.innerHTML = weatherHtml;
            } else {
                container.innerHTML = "<p>Weather data unavailable.</p>";
            }
        })
        .catch(() => {
            container.innerHTML = "<p>Unable to fetch weather data.</p>";
        });
});