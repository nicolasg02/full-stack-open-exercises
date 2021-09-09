import React from 'react';

const Person = ({ person, handleRemovePerson }) => {
  return (
    <p>
      {person.name} {person.number}{' '}
      <button onClick={handleRemovePerson}>delete</button>
    </p>
  );
};

export default Person;
