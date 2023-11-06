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
              <p  style={{color:"teal",fontSize:"25px",fontWeight:"bold"}}>{city}</p>
              <p style={{color:"black",fontSize:"20px",fontWeight:"bold"}}>City: {data.name}</p>
              <p style={{color:"black",fontSize:"20px",fontWeight:"bold"}}>Temperature: {data.main.temp} °C</p>
              <p style={{color:"black",fontSize:"20px",fontWeight:"bold"}} >
                Weather: {data.weather[0].main}, {data.weather[0].description}
              </p>
          
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
