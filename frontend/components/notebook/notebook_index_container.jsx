import React from 'react';

import NotebookIndex from './notebook_index';

import { requestAllNotebooks } from '../../actions/notebook_actions';
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
    requestAllNotes: () => dispatch(requestAllNotes())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookIndex);
