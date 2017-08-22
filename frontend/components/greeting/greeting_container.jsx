import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (session) => ({
  currentUser: session.currentUser
});



const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(Greeting);
