import React, { useState } from 'react';
import { Nav } from './Nav';

export const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      username: username,
      password: password,
      email: email,
    };
    // Make a POST request to the server to save the user data
    fetch('/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => {
        if (response.ok) {
          console.log('User registration successful!');
        } else {
          console.error('User registration failed:', response.status);
        }
      })
      .catch(error => {
        console.error('Error registering user:', error);
      });
  };

  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={event => setUsername(event.target.value)}
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
        <div>
          <label htmlFor='confirm-password'>Confirm Password:</label>
          <input
            type='password'
            id='confirm-password'
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
