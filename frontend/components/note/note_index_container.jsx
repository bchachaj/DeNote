import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { selectAllNotes } from '../../reducers/selectors';
import { requestAllNotes, deleteNote } from '../../actions/note_actions';


const mapStateToProps = (state) => {

  return {
    notes: selectAllNotes(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllNotes: () => dispatch(requestAllNotes()),
    deleteNote: () => dispatch(deleteNote),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
