import React, { useState, useEffect } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const CountryInformation = ({ country }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`
      )
      .then((response) => setWeather(response.data));
  }, [country.capital]);

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt={country.name} />
      <div>
        {weather.current && (
          <>
            <h2>Weather in {country.capital}</h2>
            <h3>temperature: {weather.current.temperature}</h3>
            <img src={weather.current.weather_icons[0]} alt={country.capital} />
            <h3>
              wind: {weather.current.wind_speed} mph direction{" "}
              {weather.current.wind_dir}
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default CountryInformation;
