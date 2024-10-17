import axios from 'axios';

const API_KEY = '8e4ba8dc0c5cbf4ac0f8864b2f8e3c0c';

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données météo :', error);
    return null;
  }
};

export const getWeatherForecast = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des prévisions :', error);
    return null;
  }
};

export const getWeatherByCoordinates = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données météo par coordonnées :', error);
    return null;
  }
};
