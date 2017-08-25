import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectOneNote } from '../../reducers/selectors';
import { requestSingleNote } from '../../actions/note_actions';

class NoteShow extends React.Component {

  constructor(props){
    super(props);
    const notes = props.notes;
  }

  componentDidMount(){
    this.props.requestSingleNote(this.props.match.params.noteId);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.noteId !== nextProps.match.params.noteId) {
      this.props.requestSingleNote(nextProps.match.params.noteId);
    }
  }

  render(){
    const { note } = this.props;
    // console.log(note.title);
    if (!note) {
      return null;
    }
    return (
      <div className="note-show">
        <h1>{note.title}</h1>
        <p>{note.body}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const noteId = state.ui;
  const note = state.notes[noteId];

  return {
    note,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    requestSingleNote: (noteId) => dispatch(requestSingleNote(noteId)),
  };
};



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteShow));
