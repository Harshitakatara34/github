import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import Overlay from './Components/Overlay';
const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  const getWeather = async (city) => {
    try {
      const apiKey = "840de593b7028de6e424162454790fe5";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok && data.cod !== "404") {
        setWeatherData(data);
        setShowOverlay(true);
        setError(null);
        setCity(city);
      } else {
        setShowOverlay(true);
        setError("Data not available for the entered city. Please try again.");
        setWeatherData(null);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setShowOverlay(true);
      setError("Error fetching data. Please try again later.");
      setWeatherData(null);
    }
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setError(null);
  };

  return (
    <div className="app">
      <SearchBar getWeather={getWeather} />
      {showOverlay && <Overlay data={weatherData} error={error} city={city} closeOverlay={closeOverlay} />}
    </div>
  );
};

export default App;
