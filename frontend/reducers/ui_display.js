import { RECEIVE_ONE_NOTE } from '../actions/note_actions';
import { RECEIVE_ONE_NOTEBOOK } from '../actions/notebook_actions';
import merge from 'lodash/merge';


const nullUI = Object.freeze({
  ui: 0,
});

const uiDisplayReducer = (state = nullUI, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_NOTE:
      return action.note.id || state;
    // case RECEIVE_ONE_NOTEBOOK:
    //   return action.notebook.id || state;
    default:
      return state;
  }
};

export default uiDisplayReducer;
