import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Searchbar.css';

const SearchBar = ({ getWeather }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    getWeather(city);
  };

  return (
    <div className="search-container">
      <h1 style={{ color: "white" }}>Search Box</h1>
      <p style={{ color: "white", fontWeight: "600", fontSize: "20px" }}>Type Below !</p>
      <div className="search-input-container">
        <input
          className="search-input"
          placeholder="Search"
          type="text"
          value={city}
          onChange={handleInputChange}
        />
        <FaSearch className="search-icon" onClick={handleSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
