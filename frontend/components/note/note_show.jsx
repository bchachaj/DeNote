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
    debugger;
  }

  componentWillReceiveProps(nextProps) {

    if(this.props.match.params.noteId !== nextProps.match.params.noteId) {
      this.props.requestSingleNote(nextProps.match.params.noteId);
    }
  }

  render(){
    let { note } = this.props;
    if (!note) {
      return null;
    }
    return (
      <div className="note-show">
        <h1>{note.title}</h1>
        <form>
            <input type="text" className="note-header-input" value={note.title}/>
            <input type="textarea" rows="40" cols="50" className="note-header-input" value={note.body}/>
            <input type="submit" value="Save" onSubmit={this.handleSubmit}/>
.        </form>
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
