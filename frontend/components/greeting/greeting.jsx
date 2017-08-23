import React from 'react';
import { Switch, Redirect, Link, Route } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Signup</Link>
  </nav>
);

const personalize = (currentUser, logout) => (
  <section className="auth-container">
    <h3>Welcome, {currentUser.username}</h3>
    <button className="logout header-button" onClick={logout.bind(this)}>Logout</button>
  </section>
);


const Greeting = ({currentUser, logout}) => (
  currentUser ? personalize(currentUser, logout) : <Redirect to="/login" />
);

export default Greeting;
