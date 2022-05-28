import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [persons, setPersons] = useState(data);
  const clearAll = () => {
    setPersons([]);
  };
  return (
    <main>
      <section className='container'>
        <h3>{persons.length} birthdays today</h3>
        {persons.map((person) => {
          return <List key={person.id} {...person} />;
        })}
        <button className='btn' onClick={clearAll}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
