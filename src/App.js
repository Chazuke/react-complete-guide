import './App.css';
import { useState } from 'react';
import Person from './Person/Person';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Max', age: 28 },
    { name: 'Manu', age: 29 },
    { name: 'Steph', age: 26 }
  ]);

  const updatePersonsName = (index, name) => {
    let newPersons = [...persons];
    newPersons[index].name = name;
    setPersons(newPersons);
  };

  const updatePersonsAge = (index, age) => {
    let newPersons = [...persons];
    newPersons[index].age = age;
    setPersons(newPersons);
  };

  const switchNameHandler = () => {
    updatePersonsName(0, 'Maximilian');
    updatePersonsAge(2, 37);
  };

  const onChangeHandler = (event) => {
    updatePersonsName(1, event.target.value);
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <h1>Hi, I'm a react app</h1>
      <button style={style} onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={persons[0].name}
        age={persons[0].age}
        onClickHandler={() => updatePersonsName(0, 'Max0')}
        changed={onChangeHandler} >My Hobby is: Racing</Person>
      <Person
        name={persons[1].name}
        age={persons[1].age}
        onClickHandler={switchNameHandler}
        changed={onChangeHandler} >My Hobby is: Horseback Riding</Person>
      <Person
        name={persons[2].name}
        age={persons[2].age}
        updateAgeHandler={updatePersonsAge}
        onClickHandler={() => { updatePersonsName(0, 'Max2'); updatePersonsAge(2, 27); }}
        changed={onChangeHandler} >My Hobby is: Coloring</Person>
    </div >
    //React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a react app!'))
  );
}





export default App;
