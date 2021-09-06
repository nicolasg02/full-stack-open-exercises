import React from "react";
import CountryInformation from "./CountryInformation";

const SearchResults = ({ filteredData, setFilteredData }) => {
  const handleShowInfo = (event) => {
    const inputValue = event.target.id.toLowerCase();

    const countryInfo = filteredData.filter((country) => {
      return country.name.toLowerCase() === inputValue;
    });

    setFilteredData(countryInfo);
  };

  if (filteredData.length > 1 && filteredData.length <= 10) {
    return (
      <div>
        {filteredData.map((country) => {
          return (
            <div key={country.name}>
              <p>
                {country.name}{" "}
                <button id={country.name} onClick={handleShowInfo}>
                  show
                </button>
              </p>
            </div>
          );
        })}
      </div>
    );
  }

  if (filteredData.length === 1) {
    return (
      <div>
        {filteredData.map((country) => {
          return <CountryInformation key={country.name} country={country} />;
        })}
      </div>
    );
  }

  return (
    <div>
      <p>Too many matches, specify another filter</p>
    </div>
  );
};

export default SearchResults;
