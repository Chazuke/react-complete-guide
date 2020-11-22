import './App.css';
import { useState } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

function App() {
  const [username, setUsername] = useState('Username');

  const updateUsername = (event) => {
    setUsername(event.target.value);
  }

  const userOutputStyle = {
    width: '60%',
    margin: '16px auto',
    border: '1px solid #eee',
    boxShadow: '0 2px 3px #ccc',
    padding: '16px',
    textAlign: 'center'
  }

  return (
    <div className="App">
      <UserInput changed={updateUsername} username={username} />
      <UserOutput username={username} style={userOutputStyle} />
      <UserOutput username={username} style={userOutputStyle} />
      <UserOutput username={username} style={userOutputStyle} />
    </div>
  );
}

export default App;