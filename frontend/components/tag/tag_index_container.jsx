import React from 'react';

import TagIndex from './tag_index';

import { requestAllTags, deleteTag, createTag } from '../../actions/tag_actions';

import { selectAllTags } from '../../reducers/selectors';
import { createTaggings } from '../../actions/tagging_actions';
import { connect } from 'react-redux';
import { selectAllNotes } from '../../reducers/selectors';

const mapStateToProps = state => {
  const tags = selectAllTags(state);
  const notes = selectAllNotes(state);
  return {
    tags,
    notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllTags: () => dispatch(requestAllTags()),
    deleteTag: (id) => dispatch(deleteTag(id)),
    createTag: (tag) => dispatch(createTag(tag)),
    createTaggings: (taggings) => dispatch(createTaggings(taggings))
    //deleteTaggings
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndex);
