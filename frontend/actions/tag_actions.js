import * as TagAPI from './../util/tag_util';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_SINGLE_TAG = 'RECEIVE_SINGLE_TAG';
export const DELETE_TAG = 'DELETE_TAG';

export const requestAllTags = () => (dispatch) => {
  return TagAPI.fetchAllTags()
    .then(tags => dispatch(receiveAllTags(tags)));
};

export const receiveAllTags = tags => ({
  type: RECEIVE_ALL_TAGS,
  tags
});


export const requestSingleTag = (id) => (dispatch) => {
  return TagAPI.fetchSingleTag(id)
    .then(tag => dispatch(receiveSingleTag(tag)));
};

export const receiveSingleTag = (tag) => ({
  type: RECEIVE_SINGLE_TAG,
  tag
});

export const requestDeleteTag = id => dispatch => {
  TagAPI.deleteTag(id)
    .then(tag => dispatch(deleteTag(tag)));
};

export const deleteTag = tag => ({
  type: DELETE_TAG,
  tag
});

export const createTag = tag => dispatch => {
  TagAPI.createTag(tag)
    .then(tag => dispatch(receiveSingleTag(tag)));
}
