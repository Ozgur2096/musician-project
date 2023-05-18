import React, { useState } from 'react';
import { Nav } from './Nav';

export const RegistrationForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const [message, setMessage] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      password: password,
      email: email,
    };
    // Make a POST request to the server to save the user data
    if (
      email.length > 0 &&
      password.length > 0 &&
      password === confirmPassword
    ) {
      fetch('https://musician.onrender.com/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then(response => {
          if (response.ok) {
            console.log('User registration successful!');
            setIsError(false);
            setMessage('User registration successful!');
          } else {
            console.error('User registration failed:', response.status);
            setMessage('This email is already connected to an account.');
            setIsError(true);
          }
          return response;
        })
        .then(response => response.json())
        .then(data => console.log(data.message))
        .catch(error => {
          console.error('Error registering user:', error);
        });
    } else {
      setMessage('Enter a valid email and check your password, please');
      setIsError(true);
    }
  };

  return (
    <div className='registration'>
      <Nav />
      <form onSubmit={handleSubmit}>
        <div className='form-item'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className='form-item'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div className='form-item'>
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
      {message && (
        <div className={isError ? 'message-error' : 'message-success'}>
          {message}
        </div>
      )}
    </div>
  );
};
