import { RECEIVE_SINGLE_TAG } from '../actions/tag_actions';

const tagUiReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_TAG:
      return action.tag;
    default:
      return state;
  }
};

export default tagUiReducer;
