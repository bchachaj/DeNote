import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { selectOneNote,
         selectAllNotes,
         selectAllNotebooks } from '../../reducers/selectors';
import { requestSingleNote,
         requestUpdateNote,
         deleteNote
        } from '../../actions/note_actions';
import { requestSingleNotebook, requestAllNotebooks,
         createNotebook } from '../../actions/notebook_actions';
import requestAllTaggings from '../../actions/tagging_actions';

import NoteShow from './note_show';

const mapStateToProps = (state, ownProps) => {

 const noteId = state.ui.note_ui;
 const note = state.notes[noteId];
 const notes = selectAllNotes(state);
 const notebooks = selectAllNotebooks(state);
 const notebookId = state.ui.notebook_ui;
 const notebook = state.notebooks[notebookId];

 //
 return {
   notes,
   note,
   notebooks,
   notebook
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
   requestSingleNote: (noteId) => dispatch(requestSingleNote(noteId)),
   requestUpdateNote: (note) => dispatch(requestUpdateNote(note)),
   requestAllNotebooks: () => dispatch(requestAllNotebooks()),
   deleteNote: (noteId) => dispatch(deleteNote(noteId)),
   createNotebook: (notebook) => dispatch(createNotebook(notebook)),
   requestAllTaggings: () => dispatch(requestAllTaggings())
 };
};



export default withRouter(connect(
 mapStateToProps,
 mapDispatchToProps
)(NoteShow));
