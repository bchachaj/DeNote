import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectOneNote, selectAllNotes } from '../../reducers/selectors';
import { requestSingleNote, requestUpdateNote, deleteNote } from '../../actions/note_actions';

class NoteShow extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    };

  }

  componentDidMount(){
    this.props.requestSingleNote(this.props.match.params.noteId);

    //for edit?
    // this.setState({ title: this.props.note.title, body: this.props.note.body });

  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.noteId !== nextProps.match.params.noteId) {
      this.props.requestSingleNote(nextProps.match.params.noteId);
    }
  }

  render(){
    let { note } = this.props;
    let test = this.props.notes[0];
    if (!note) {
      return null;
      // note = test;
    }
    return (
      <div className="note-show">
        <h1>{note.title}</h1>
        <input className="note-header-input" value={this.state.title}/>
        <p>{note.body}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const noteId = state.ui;
  const note = state.notes[noteId];
  const notes = selectAllNotes(state);
  return {
    notes,
    note
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    requestSingleNote: (noteId) => dispatch(requestSingleNote(noteId)),
    requestUpdateNote: (note) => dispatch(requestUpdateNote(note)),
    deleteNote: (noteId) => dispatch(deleteNote(noteId)),

  };
};



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteShow));
