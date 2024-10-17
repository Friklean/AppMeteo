import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Importer des styles globaux si nécessaire
import App from './App';
import reportWebVitals from './reportWebVitals';

// Crée un point d'entrée pour votre application météo
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();  // Pour mesurer la performance de l'application
