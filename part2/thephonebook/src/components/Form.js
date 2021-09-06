import React from "react";

const Form = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  const handleNewPerson = (event) => {
    event.preventDefault();

    const contact = {
      name: newName,
      number: newNumber,
    };

    persons.forEach((person) => {
      if (person.name === newName) {
        alert(`${newName} is already added to the phonebook`);
        setPersons(persons);
      } else {
        setPersons(persons.concat(contact));
      }
    });
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  return (
    <form onSubmit={handleNewPerson}>
      <div>
        name: <input onChange={handleNewName} />
      </div>
      <div>
        number: <input onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
