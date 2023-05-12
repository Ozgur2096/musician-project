import React, { useState } from 'react';
import { Nav } from './Nav';

export const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    // Make a POST request to the server to check if the user credentials are valid
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => {
        if (response.ok) {
          console.log('User login successful!');
        } else {
          console.error('User login failed:', response.status);
        }
      })
      .catch(error => {
        console.error('Error logging in user:', error);
      });
  };

  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <button type='submit'>Log In</button>
      </form>
    </>
  );
};
