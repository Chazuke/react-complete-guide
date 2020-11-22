import './App.css';
import { useState } from 'react';
import Validation from './Validation/Validation'
import Char from './Char/Char'


function App() {
  const [textState, setTextState] = useState("");

  const inputTextChangeHandler = (event) => {
    setTextState(event.target.value);
  };

  const charClickHandler = (index, event) => {
    let newTextState = [...textState];
    newTextState.splice(index, 1);
    setTextState(newTextState.join(''));
  };

  const createCharList = () => {
    return textState.split('').map((c, index) => {
      return (
        <Char
          inputChar={c}
          key={index}
          click={() => charClickHandler(index)}
        />
      );
    });
  };

  return (
    <div className="App">
      <input type="text" onChange={inputTextChangeHandler} value={textState} />
      <p>{textState.length}</p>
      <Validation textLength={textState.length} />
      {createCharList()}
    </div>
  );
};

export default App;
