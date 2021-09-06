import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchResults from "./components/SearchResults";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleCountryFilter = (event) => {
    let inputValue = event.target.value.toLowerCase();

    const results = data.filter((country) => {
      return country.name.toLowerCase().indexOf(inputValue) > -1;
    });

    setFilteredData(results);
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <div>
        find countries <input onChange={handleCountryFilter} />
      </div>
      <SearchResults
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
    </div>
  );
};

export default App;
