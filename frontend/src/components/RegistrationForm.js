import React, { useState } from 'react';
import { Nav } from './Nav';

export const RegistrationForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      password: password,
      email: email,
    };
    // Make a POST request to the server to save the user data
    if (password.length > 0 && password === confirmPassword) {
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
            setSuccessMessage('User registration successful!');
          } else {
            console.error('User registration failed:', response.status);
            setSuccessMessage('This email is already connected to an account.');
          }
          return response;
        })
        .then(response => response.json())
        .then(data => console.log(data.message))
        .catch(error => {
          console.error('Error registering user:', error);
        });
    } else {
      setSuccessMessage('Check your password, please');
    }
  };

  return (
    <div className='registration'>
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
        <div>
          <label htmlFor='confirm-password'>Confirm Password:</label>
          <input
            type='password'
            id='confirm-password'
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
      {successMessage && <div className='message'>{successMessage}</div>}
    </div>
  );
};
