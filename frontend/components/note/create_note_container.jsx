import React from 'react';
import { createNote } from '../../actions/note_actions';
import { connect } from 'react-redux';
import CreateNote from './create_note';
import { requestSingleNotebook, requestAllNotebooks,
         createNotebook } from '../../actions/notebook_actions';
import { selectAllNotebooks } from '../../reducers/selectors';
const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  let notebookId = state.ui.notebook_ui;

  const notebooks = selectAllNotebooks(state);
  const currentNote = state.ui.note_ui;
  return {
    notebookId,
    currentUser,
    currentNote,
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
