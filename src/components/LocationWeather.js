import React, { useState, useEffect } from 'react';
import { getWeatherByCoordinates } from '../services/weatherService';

const LocationWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      setLoading(true);
      const data = await getWeatherByCoordinates(latitude, longitude);
      setWeather(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? <p>Chargement...</p> : weather && (
        <div>
          <h2>Météo à votre position</h2>
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

export default LocationWeather;
