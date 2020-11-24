import appCssClasses from './App.module.css';
import { useState } from 'react';
import Person from './Person/Person';

function App() {
  // Define Initial State
  const [persons, setPersons] = useState([
    { id: 0, name: 'Max', age: 28 },
    { id: 1, name: 'Manu', age: 29 },
    { id: 2, name: 'Steph', age: 26 }
  ]);
  const [showPersons, setShowPersons] = useState(false);

  // Update the name of the person with the given ID in state
  const updatePersonsName = (id, name) => {
    let newPersons = persons.slice();
    newPersons.find(p => p.id === id).name = name;
    setPersons(newPersons);
  };

  // Delete the person with the given ID in state
  const deletePersonHandler = (id) => {
    let newPersons = persons.slice();
    newPersons.splice(newPersons.findIndex(p => p.id === id), 1);
    setPersons(newPersons);
  }

  // Handle input event from Person component
  const onChangeHandler = (index, event) => {
    updatePersonsName(index, event.target.value);
  };

  // Handle button click event in root App component
  const togglePersonsHandler = (event) => {
    setShowPersons(!showPersons);
  };

  let personsJSX = null;
  let btnClasses = [];

  // Toggle displaying list of Person components
  if (showPersons) {
    personsJSX = (
      <div>
        {persons.map((person, index) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              changed={(event) => onChangeHandler(person.id, event)}
              click={() => deletePersonHandler(person.id)}
              key={person.id} />
          );
        })}
      </div>
    );
    btnClasses.push(appCssClasses.Red);
  }

  let pClasses = [];
  if (persons.length <= 2) {
    pClasses.push(appCssClasses.red);
  }
  if (persons.length <= 1) {
    pClasses.push(appCssClasses.bold);
  }

  // Render App Component
  return (
    <div className={appCssClasses.App}>
      <h1>Hi, I'm a react app</h1>
      <p className={pClasses.join(' ')}>This is really working!</p>
      <button className={btnClasses.join(' ')} onClick={togglePersonsHandler}>Toggle Persons</button>
      {personsJSX}
    </div >
  );
}

export default App;
