import React from 'react';
import { createNote } from '../../actions/note_actions';

const mapStateToProps = (state) => {
  let currentUser = state.session.currentUser;
  debugger;
  return {
    currentUser,
  };
};



const mapDispatchToProps = dispatch => {
  return {
    createNote: note => dispatch(createNote(note)),
  };
};
