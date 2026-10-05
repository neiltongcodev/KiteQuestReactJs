import React from 'react';
import { useState } from 'react';

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
     const [fullName, setFullName] = useState('');

  
    const handleFirstNameChange = (e : React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
      setFullName(e.target.value + ' ' + lastName);
    }
  
    const handleLastNameChange = (e : React.ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value);
      setFullName(firstName + ' ' + e.target.value);
    }

    return (
        <>
          <h2>Let’s check you in</h2>
          <label>
            First name:{' '}
            <input
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </label>
          <label>
            Last name:{' '}
            <input
              value={lastName}
              onChange={handleLastNameChange}
            />
          </label>
          <p>
            Your full name is : <b>{fullName}</b>
          </p>
        </>
      );
}

export default Form;
