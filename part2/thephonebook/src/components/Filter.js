import React from 'react';

const Filter = ({ persons, setDisplayPersons }) => {
  const handleFilterContacts = event => {
    let inputValue = event.target.value.toLowerCase();

    let filteredContacts = persons.filter(person => {
      return person.name.toLowerCase().indexOf(inputValue) > -1;
    });

    if (inputValue.length > 0) {
      setDisplayPersons(filteredContacts);
    } else {
      setDisplayPersons(persons);
    }
  };

  return (
    <div>
      filter shown with <input onChange={handleFilterContacts} />
    </div>
  );
};

export default Filter;
