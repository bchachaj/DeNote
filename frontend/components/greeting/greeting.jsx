import React from 'react';
import { Switch, Redirect, Link, Route } from 'react-router-dom';
import NotebookModal from '../notebook/notebook_modals/notebook_modal';



const personalize = (currentUser, logout) => {
return(
  <div className="side-menu">

  <section className="auth-container">
    <div className="header sidebar-branding">
      <Link to='/'>
        <span className="logo"></span>
      </Link>
    </div>

    <div className="sidebar">
      <div className="side-section section-a">
          <Link to="/notes/new">
            <i className="fa fa-plus" aria-hidden="true"></i>
          </Link>
      </div>

      <div className="side-section section-b">
        <Link to="/notes">
          <i className="fa fa-file-text-o" aria-hidden="true"></i>
        </Link>

         {/* <NotebookModal/> */}
         <Link to="/notebooks">
           <i className="fa fa-book" aria-hidden="true"></i>
         </Link>
        <Link to="/tags">
          <i className="fa fa-tag" aria-hidden="true"></i>
        </Link>

        <a className="github-link" href="http://github.com/bchachaj/denote">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </section>
  <button className="logout header-button" onClick={logout}>Logout</button>
 </div>
 );
};


const Greeting = ({currentUser, logout}) => (
  currentUser ? personalize(currentUser, logout) : <Redirect to="/login" />
);

export default Greeting;
