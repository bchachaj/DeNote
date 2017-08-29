import React from 'react';
import CreateNotebook from './create_notebook';
import { connect } from 'react-redux';
import { createNotebook } from '../../actions/notebook_actions';

const mapStateToProps = state => {
  let currentUser = state.session.currentUser;
  return {
    currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNotebook: notebook => dispatch(createNotebook(notebook)),
  };

};




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNotebook);
