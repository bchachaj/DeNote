import React from 'react';

import TagIndex from './tag_index';

import { requestAllTags, deleteTag } from '../../actions/tag_actions';

import { selectAllTags } from '../../reducers/selectors';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    tags: selectAllTags(state),

  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllTags: () => dispatch(requestAllTags()),
    deleteTag: (id) => dispatch(deleteTag(id))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndex);
