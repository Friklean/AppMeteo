import React, { useState } from 'react';
import { getWeatherForecast } from '../services/weatherService';

const WeatherForecast = () => {
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchForecast = async () => {
    setLoading(true);
    const data = await getWeatherForecast(city);
    setForecast(data);
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
      <button onClick={fetchForecast}>Obtenir les prévisions</button>

      {loading ? <p>Chargement...</p> : forecast && (
        <div>
          {forecast.list.map((item, index) => (
            <div key={index}>
              <h3>{new Date(item.dt_txt).toLocaleString()}</h3>
              <p>Température: {item.main.temp} °C</p>
              <p>Description: {item.weather[0].description}</p>
              <img 
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} 
                alt="Weather Icon"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
