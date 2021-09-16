import React, { useState, useEffect } from 'react';

import Filter from './components/Filter';
import Form from './components/Form';
import Person from './components/Person';
import Notification from './components/Notification';
import ErrorNotification from './components/ErrorNotification';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [displayPersons, setDisplayPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons);
      setDisplayPersons(initialPersons);
    });
  }, []);

  const handleRemovePerson = id => {
    const person = persons.find(n => n.id === id);
    const confirmDelete = window.confirm(`Delete ${person.name}?`);

    if (confirmDelete) {
      setPersons(persons.filter(person => person.id !== id));
      setDisplayPersons(persons.filter(person => person.id !== id));
      personService.remove(id);

      setSuccessMessage(`${person.name} deleted successfully.`);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <ErrorNotification message={errorMessage} />
      <Filter persons={persons} setDisplayPersons={setDisplayPersons} />
      <h3>Add a new</h3>
      <Form
        persons={persons}
        setPersons={setPersons}
        setDisplayPersons={setDisplayPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
      />
      <h2>Numbers</h2>
      <div>
        {displayPersons.map(person => (
          <Person
            key={person.id}
            person={person}
            handleRemovePerson={() => handleRemovePerson(person.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
