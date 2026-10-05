import { useState } from 'react';
import './App.css';

function App() {

  const [lastName] = useState('Smith');

  return (
    <div className="App">
      <ul>
        <li>Last Name: {lastName}</li>
      </ul>
    </div>
  );
}

export default App;