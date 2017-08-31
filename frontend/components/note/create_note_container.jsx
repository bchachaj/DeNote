import React from 'react';
import { createNote } from '../../actions/note_actions';
import { connect } from 'react-redux';
import CreateNote from './create_note';
import { requestSingleNotebook, requestAllNotebooks,
         createNotebook } from '../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  let notebookId = state.ui.notebook_ui;

  const notebooks = state.notebooks;
  return {
    notebookId,
    currentUser,
    notebooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNote: note => dispatch(createNote(note)),
    requestAllNotebooks: () => dispatch(requestAllNotebooks()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNote);
