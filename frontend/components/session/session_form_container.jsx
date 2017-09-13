import React from 'react';
import { connect } from 'react-redux';
import { login,
         logout,
         signup,
         clearErrors } from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ session }) => {

  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const form = location.pathname.slice(1);
  const processForm = (form === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: errors => dispatch(clearErrors()),
    login: user => dispatch(login(user)),
    form
  };

};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
