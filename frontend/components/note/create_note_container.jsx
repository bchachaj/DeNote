import React from 'react';
import { createNote } from '../../actions/note_actions';
import { connect } from 'react-redux';
import CreateNote from './create_note';

const mapStateToProps = (state) => {
  let currentUser = state.session.currentUser;
  let notebookId = state.ui.notebook_ui;
  debugger;
  return {
    notebookId,
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNote: note => dispatch(createNote(note)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNote);
