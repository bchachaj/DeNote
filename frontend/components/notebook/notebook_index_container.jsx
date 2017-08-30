import React from 'react';

import NotebookIndex from './notebook_index';

import { requestAllNotebooks, deleteNotebook } from '../../actions/notebook_actions';
import { requestAllNotes } from '../../actions/note_actions';
import { selectAllNotebooks, selectAllNotes } from '../../reducers/selectors';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    notebooks: selectAllNotebooks(state),
    notes: selectAllNotes(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllNotebooks: () => dispatch(requestAllNotebooks()),
    requestAllNotes: () => dispatch(requestAllNotes()),
    deleteNotebook: (notebook) => dispatch(deleteNotebook(notebook))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookIndex);
