import merge from 'lodash/merge';

import {
  RECEIVE_SINGLE_TAG,
  RECEIVE_ALL_TAGS,
  DELETE_TAG,
} from '../actions/tag_actions';

import { RECEIVE_TAGGING } from '../actions/tagging_actions';


import {
  RECEIVE_ONE_NOTE
} from '../actions/note_actions';

const tagReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  const { tag } = action;

  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      return action.tags;
    case RECEIVE_SINGLE_TAG:
      nextState = merge({}, state);
      nextState[tag.id] = tag;
      return nextState;
    case RECEIVE_TAGGING:
      nextState = merge({}, state);
      return nextState;
    case DELETE_TAG:
      nextState = merge({}, state);
      delete nextState[tag.id];
      return nextState;
    default:
      return state;
  }
};

export default tagReducer;
