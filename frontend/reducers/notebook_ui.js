import { RECEIVE_ONE_NOTEBOOK } from '../actions/notebook_actions';
import merge from 'lodash/merge';

const notebookUi = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_NOTEBOOK:
      return action.notebook.id;
    default:
      return state;
  }
};


export default notebookUi;
