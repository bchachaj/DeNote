import React from 'react';

import TagIndex from './tag_index';

import { requestAllTags, deleteTag, createTag } from '../../actions/tag_actions';

import { selectAllTags } from '../../reducers/selectors';
import { createTaggings } from '../../actions/tagging_actions';
import { connect } from 'react-redux';
import { requestAllNotes } from '../../actions/note_actions';

const mapStateToProps = state => {
  const tags = selectAllTags(state);
  return {
    tags,
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
