import { RECEIVE_ONE_NOTE } from '../actions/note_actions';

const uiDisplayReducer = (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ONE_NOTE:
      return action.note.id;
    default:
      return state;
  }
};

export default uiDisplayReducer;
