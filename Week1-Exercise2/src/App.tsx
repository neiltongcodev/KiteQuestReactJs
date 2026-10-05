import React from 'react';
import './App.css';

interface Props { 
  lastName: string;
  firstName: string;
  middleName: string;
  birthday: string;
  contactNumber: string;  
  country: string;
}

const App: React.FC<Props> = (props) => {
  return (
    <div className="App">
      <ul>
        <li>Last Name: {props.lastName}</li>
        <li>First Name: {props.firstName}</li>
        <li>Middle Name: {props.middleName}</li>
        <li>Birthday: {props.birthday}</li>
        <li>Contact NUmber: {props.contactNumber}</li>
        <li>Country: {props.country}</li>
      </ul>
    </div>
  );
}

export default App;