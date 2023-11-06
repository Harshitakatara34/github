import React from 'react';
import './Overlay.css';

const Overlay = ({ data, error, city, closeOverlay }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-content">
          {error ? (
            <div>
              <span className="close" onClick={closeOverlay}>
                &times;
              </span>
              <p>{error}</p>
              <p>Search Query: {city}</p>
            </div>
          ) : (
            <div>
              <span className="close" onClick={closeOverlay}>
                &times;
              </span>
              <p>City: {data.name}</p>
              <p>Temperature: {data.main.temp} °C</p>
              <p>
                Weather: {data.weather[0].main}, {data.weather[0].description}
              </p>
              <p>Search Query: {city}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
