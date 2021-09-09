import React from 'react';
import personService from '../services/persons';

const Form = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  const handleNewPerson = event => {
    event.preventDefault();
    const contactObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    const personObj = persons.find(person => person.name === contactObj.name);

    // if person name already exists:
    if (personObj) {
      if (personObj.number !== contactObj.number) {
        const confirm = window.confirm(
          `${contactObj.name} is already added to phonebook, replace the old number with a new one?`
        );

        if (confirm) {
          const changedPerson = { ...personObj, number: contactObj.number };

          return personService
            .update(changedPerson.id, changedPerson)
            .then(returnedPerson => {
              setPersons(
                persons.map(person =>
                  person.id !== changedPerson.id ? person : returnedPerson
                )
              );
            });
        } else {
          return;
        }
      }

      return alert(`${contactObj.name} is already added to phonebook.`);
    }

    // add new person
    personService.create(contactObj).then(returnedNote => {
      setPersons(persons.concat(returnedNote));
      setNewName('');
      setNewNumber('');
    });
  };

  const handleNewNumber = event => {
    setNewNumber(event.target.value);
  };

  const handleNewName = event => {
    setNewName(event.target.value);
  };

  return (
    <form onSubmit={handleNewPerson}>
      <div>
        name: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
