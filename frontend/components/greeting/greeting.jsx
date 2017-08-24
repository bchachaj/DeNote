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
  <div className="side-menu">

  <section className="auth-container">
    <div className="header sidebar-branding">
      <span className="logo"></span>
    </div>

    <div className="sidebar">
      <div className="side-section section-a">
          <i className="fa fa-plus" aria-hidden="true"></i>
          <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
          <i className="fa fa-search" aria-hidden="true"></i>
      </div>

      <div className="side-section section-b">
        <i className="fa fa-file-text-o" aria-hidden="true"></i>
        <i className="fa fa-book" aria-hidden="true"></i>
        <i className="fa fa-tag" aria-hidden="true"></i>
      </div>
    </div>
  </section>
  <button className="logout header-button" onClick={logout}>Logout</button>
 </div>
);


const Greeting = ({currentUser, logout}) => (
  currentUser ? personalize(currentUser, logout) : <Redirect to="/login" />
);

export default Greeting;
