import React from 'react';
import personService from '../services/persons';

const Form = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  setSuccessMessage,
  setErrorMessage,
  setDisplayPersons,
}) => {
  const handleNewPerson = event => {
    event.preventDefault();
    const contactObj = {
      name: newName,
      number: newNumber,
    };

    const personObj = persons.find(person => person.name === contactObj.name);

    // if person name already exists:
    if (personObj) {
      if (personObj.number !== contactObj.number) {
        const confirm = window.confirm(
          `${contactObj.name} is already added to phonebook, replace the old number with a new one?`
        );

        // change number
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
              setDisplayPersons(
                persons.map(person =>
                  person.id !== changedPerson.id ? person : returnedPerson
                )
              );
              setSuccessMessage(
                `${changedPerson.name}'s number as been changed.`
              );
              setNewName('');
              setNewNumber('');
              setTimeout(() => {
                setSuccessMessage(null);
              }, 3000);
            })
            .catch(error => {
              setErrorMessage(
                `Information of ${newName} has already been removed from server`
              );
              setTimeout(() => {
                setErrorMessage(null);
              }, 3000);
            });
        } else {
          return;
        }
      }

      return alert(`${contactObj.name} is already added to phonebook.`);
    }

    // add new person
    personService
      .create(contactObj)
      .then(returnedNote => {
        setPersons(persons.concat(returnedNote));
        setDisplayPersons(persons.concat(returnedNote));
        setNewName('');
        setNewNumber('');
        setSuccessMessage(`Added ${contactObj.name}`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      })
      .catch(error => {
        const errMessage = error.response.data.error;
        setErrorMessage(errMessage);
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
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
