import React, { useState } from 'react';
import { getWeatherByCity } from '../services/weatherService';

const WeatherToday = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    const data = await getWeatherByCity(city);
    setWeather(data);
    setLoading(false);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Entrez une ville" 
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Obtenir la météo</button>

      {loading ? <p>Chargement...</p> : weather && (
        <div>
          <h2>Météo à {weather.name}</h2>
          <p>Température: {weather.main.temp} °C</p>
          <p>Description: {weather.weather[0].description}</p>
          <img 
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} 
            alt="Weather Icon"
          />
        </div>
      )}
    </div>
  );
};

export default WeatherToday;
