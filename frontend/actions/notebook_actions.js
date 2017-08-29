import * as NotebookAPI from '../util/notebook_util';


export const RECEIVE_ALL_NOTEBOOKS = 'RECEIVE_ALL_NOTEBOOKS';
export const RECEIVE_ONE_NOTEBOOK = 'RECEIVE_ONE_NOTEBOOK';

export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';

export const CREATE_NOTEBOOK = 'CREATE_NOTEBOOK';


///INDEX
export const requestAllNotebooks = () => (dispatch) => {
  return NotebookAPI.fetchAllNotebooks()
    .then(nb => dispatch(receiveAllNotebooks(nb))
  );
};


export const receiveAllNotebooks = (notebooks) => ({
  type: RECEIVE_ALL_NOTEBOOKS,
  notebooks,
});


//SHOW
export const requestSingleNotebook = (id) => dispatch => {
  return NotebookAPI.fetchOneNotebook(id)
    .then(notebook => dispatch(receiveOneNotebook(notebook)));
};

export const receiveOneNotebook = (notebook) => ({
  type: RECEIVE_ONE_NOTEBOOK,
  notebook
});

//CREATE

export const createNotebook = notebook => dispatch => {
  return NotebookAPI.createNotebook(notebook)
    .then(cnotebook => {dispatch(receiveOneNotebook(cnotebook));
      return cnotebook;
    }
  );
};

//DELETE

export const deleteNotebook = notebook => dispatch => {
  return NotebookAPI.deleteNotebook(notebook)
    .then(dnotebook => dispatch(removeNotebook(dnotebook)));
};

export const removeNotebook = notebook => ({
  type: REMOVE_NOTEBOOK,
  notebook
});
