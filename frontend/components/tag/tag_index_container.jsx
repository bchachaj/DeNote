import React from 'react';

import TagIndex from './tag_index';

import { requestAllTags, requestDeleteTag, createTag } from '../../actions/tag_actions';
import { requestAllNotes } from '../../actions/note_actions';
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
  debugger;
  return {
    requestAllTags: () => dispatch(requestAllTags()),
    removeTag: (id) => dispatch(requestDeleteTag(id)),
    createTag: (tag) => dispatch(createTag(tag)),
    createTaggings: (taggings) => dispatch(createTaggings(taggings))
    //deleteTaggings
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndex);
