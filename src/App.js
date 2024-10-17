import React from 'react';
import WeatherToday from './components/WeatherToday';
import WeatherForecast from './components/WeatherForecast';
import LocationWeather from './components/LocationWeather';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Application Météo</h1>
      <WeatherToday />
      <WeatherForecast />
      <LocationWeather />
    </div>
  );
}

export default App;
