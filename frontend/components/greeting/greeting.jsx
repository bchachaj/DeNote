import React from 'react';
import { Switch, Redirect, Link, Route } from 'react-router-dom';
import NotebookModal from '../notebook/notebook_modals/notebook_modal';
import { CSSTransitionGroup } from 'react-transition-group';



const personalize = (currentUser, logout) => (
  <div className="side-menu">

  <section className="auth-container">
    <div className="header sidebar-branding">
      <span className="logo"></span>
    </div>

    <div className="sidebar">
      <div className="side-section section-a">
          <Link to="/notes/new">
            <i className="fa fa-plus" aria-hidden="true"></i>
          </Link>

          <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
          <i className="fa fa-search" aria-hidden="true"></i>
      </div>

      <div className="side-section section-b">
        <Link to="/notes">
          <i className="fa fa-file-text-o" aria-hidden="true"></i>
        </Link>


        {/* <CSSTransitionGroup
           transitionName="example"
           transitionEnterTimeout={2500}
           transitionLeaveTimeout={2300}> */}
           <NotebookModal key={1}/>
        {/* </CSSTransitionGroup> */}

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
