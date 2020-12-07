import appCssClasses from './App.module.css';
import { useEffect, useState } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import Auxillary from '../hoc/Auxillary';
import AuthContext from '../context/AuthContext';


const App = (props) => {

  // Things run in the useEffect hook with an empty 2nd param
  // will only run once at component creation and not re-render.
  // However, the hook runs late; after Render. So if you want
  // something to execute once and first, you might need to 
  // just use class based components
  useEffect(() => {
    // Mimic Console
    console.log('[App.js] "Constructor"');

    // Mimic componentDidMount
    console.log('[App.js] "componentDidMount"');
  }, []);

  // Mimic getDerivedStateFromProps
  console.log('[App.js] "getDerivedStateFromProps"');

  // Define Initial State
  const [persons, setPersons] = useState([
    { id: 0, name: 'Max', age: 28 },
    { id: 1, name: 'Manu', age: 29 },
    { id: 2, name: 'Steph', age: 26 }
  ]);
  const [showPersons, setShowPersons] = useState(false);
  const [showCockpit, setShowCockpit] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

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
  const onNameChangeHandler = (index, event) => {
    updatePersonsName(index, event.target.value);
  };

  // Handle button click event in root App component
  const togglePersonsHandler = (event) => {
    setShowPersons(!showPersons);
  };

  const loginHandler = () => {
    setAuthenticated(true);
  }

  let personsJSX = null;

  // Toggle displaying list of Person components
  if (showPersons) {
    personsJSX = (
      <Persons
        persons={persons}
        clicked={deletePersonHandler}
        changed={onNameChangeHandler}
        isAuth={authenticated}
      />
    );
  }

  console.log('[App.js] "Render"');

  // Render App Component
  return (
    <Auxillary >
      <button onClick={() => { setShowCockpit(!showCockpit) }}>Toggle Cockpit</button>
      <AuthContext.Provider value={{ authenticated: authenticated, login: loginHandler }}>
        {showCockpit ? <Cockpit
          title={props.appTitle}
          personsLength={persons.length}
          showPerson={showPersons}
          btnClicked={togglePersonsHandler}
        /> : null}
        {personsJSX}
      </AuthContext.Provider>
    </Auxillary >
  );
}

export default WithClass(App, appCssClasses.App);
