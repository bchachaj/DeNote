import merge from 'lodash/merge';

import {
  RECEIVE_SINGLE_TAG,
  RECEIVE_ALL_TAGS,
  DELETE_TAG,
} from '../actions/tag_actions';

import {
  RECEIVE_ONE_NOTE
} from '../actions/note_actions';

const tagReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      return action.tags;
    case RECEIVE_SINGLE_TAG:
      nextState = merge({}, state);
      nextState[action.tag.id] = action.tag;
      return nextState;
    case DELETE_TAG:
      nextState = merge({}, state);
      delete nextState[action.tag.id];
      return nextState;
    default:
      return state;
  }
};

export default tagReducer;
