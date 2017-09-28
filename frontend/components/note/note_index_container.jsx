import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { selectAllNotes, selectAllNotebooks } from '../../reducers/selectors';
import { requestAllNotes, requestTagNotes, deleteNote } from '../../actions/note_actions';

const mapStateToProps = (state) => {
  const currentNote = state.ui.note_ui;
  return {
    notes: selectAllNotes(state),
    currentNote: currentNote,
    notebooks: selectAllNotebooks(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllNotes: () => dispatch(requestAllNotes()),
    requestTagNotes: (name) => dispatch(requestTagNotes(name)),
    deleteNote: () => dispatch(deleteNote),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
