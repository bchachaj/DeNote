import * as NoteAPI from '../util/note_util';

export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_ONE_NOTE = 'RECEIVE_ONE_NOTE';

export const UPDATE_NOTE = 'UPDATE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const CREATE_NOTE = 'CREATE_NOTE';

///INDEX
export const requestAllNotes = () => (dispatch) => {
  return NoteAPI.fetchAllNotes()
    .then(notes => dispatch(receiveAllNotes(notes))
  );
};


export const receiveAllNotes = (notes) => ({
  type: RECEIVE_ALL_NOTES,
  notes,
});


//SHOW
export const requestSingleNote = (id) => dispatch => {
  return NoteAPI.fetchSingleNote(id)
    .then(note => dispatch(receiveOneNote(note)));
};

export const receiveOneNote = (note) => ({
  type: RECEIVE_ONE_NOTE,
  note
});

//CREATE

export const createNote = note => dispatch => {
  return NoteAPI.createNote(note)
    .then(cnote => {dispatch(receiveOneNote(cnote));
      return cnote;
    }
  );
};

//DELETE

export const deleteNote = note => dispatch => {
  return NoteAPI.deleteNote(note)
    .then(dnote => dispatch(removeNote(dnote)));
};

export const removeNote = note => ({
  type: REMOVE_NOTE,
  note
});


//UPDATE

export const requestUpdateNote = note => (dispatch) => {
  return NoteAPI.editNote(note)
    .then(unote => dispatch(receiveOneNote(unote)));
};

export const receiveUpdateNote = note => ({
  type: UPDATE_NOTE,
  note
});



//bottom of file
