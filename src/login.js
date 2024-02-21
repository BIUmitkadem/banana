import React, { useState } from 'react';
import UserModel from './UserModel';

function LoggingPage() {
  // State variables to hold username and password
  const [username, setUsername] = useState('');

  // Function to handle login form submission
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log('Logging in with Username:', username);
    try {
        const result = UserModel.connect(username);
        console.log("connected!", result);
      } catch (error) {
        console.error('Error connecting:', error);
      }
    setUsername('');
  };

  // Function to handle signup form submission
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // Here you can perform your signup logic, like sending data to a server, etc.
    console.log('Signing up with Username:', username);
    // Reset the form after submission
    
    try {
        const result = UserModel.register(username);
        console.log("connected!", result);
      } catch (error) {
        console.error('Error connecting:', error);
      }

    setUsername('');
  };

  return (
    <div>
      <h2>Logging Page</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleLoginSubmit}>Log In</button>
        <button type="submit" onClick={handleSignupSubmit}>Sign up</button>
      </form>
    </div>
  );
}

export default LoggingPage;
