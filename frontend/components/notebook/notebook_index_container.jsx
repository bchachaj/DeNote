import React from 'react';

import NotebookIndex from './notebook_index';

import { requestAllNotebooks } from '../../actions/notebook_actions';
import { selectAllNotebooks } from '../../reducers/selectors';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    notebooks: selectAllNotebooks(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllNotebooks: () => dispatch(requestAllNotebooks()),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookIndex);
