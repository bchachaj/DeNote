import React from 'react';
import TagIndex from './tag_index';

import { requestAllTags, requestDeleteTag, createTag } from '../../actions/tag_actions';
import { requestAllNotes, requestSingleNote } from '../../actions/note_actions';
import { selectAllTags } from '../../reducers/selectors';
import { createTaggings, requestAllTaggings } from '../../actions/tagging_actions';
import { connect } from 'react-redux';
import { selectAllNotes } from '../../reducers/selectors';

const mapStateToProps = state => {
  const tags = selectAllTags(state);
  const notes = selectAllNotes(state);
  const noteId = state.ui.note_ui;
  return {
    tags,
    notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllTags: () => dispatch(requestAllTags()),
    requestAllTaggings: () => dispatch(requestAllTaggings()),
    removeTag: (id) => dispatch(requestDeleteTag(id)),
    createTag: (tag) => dispatch(createTag(tag)),
    requestSingleNote: (id) => dispatch(requestSingleNote(id)),
    requestAllNotes: () => dispatch(requestAllNotes()),
    createTaggings: (taggings, name) => dispatch(createTaggings(taggings, name))
    //deleteTaggings
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndex);
