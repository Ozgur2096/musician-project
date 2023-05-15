import React, { useState, useContext } from 'react';
import { Nav } from './Nav';
import { Navigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const LogInForm = () => {
  const { handleLoggedIn } = useContext(GlobalContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userId, setUserId] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      email,
      password,
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
        return response;
      })
      .then(response => response.json())
      .then(data => {
        setUserId(data.userId);
        handleLoggedIn(data.userId);
        return data;
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
      {userId && <Navigate to='/user/home' replace={true} />}
    </>
  );
};
