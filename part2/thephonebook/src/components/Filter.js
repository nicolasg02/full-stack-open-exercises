import React from "react";

const Filter = ({ persons, setPersons }) => {
  const handleFilterContacts = (event) => {
    let inputValue = event.target.value.toLowerCase();

    let filteredContacts = persons.filter((person) => {
      return person.name.toLowerCase().indexOf(inputValue) > -1;
    });

    setPersons(filteredContacts);
  };

  return (
    <div>
      filter shown with <input onChange={handleFilterContacts} />
    </div>
  );
};

export default Filter;
