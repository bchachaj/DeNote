import React from 'react';
import { connect } from 'react-redux';

import { selectOneNote } from '../../reducers/selectors';
import { requestSingleNote } from '../../actions/note_actions';

class NoteShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestSingleNote(this.props.match.params.noteId);
  }

  render(){
    const { note } = this.props;
    return (
      <div className="note-show">
        <h1>{note.title}</h1>
        <p>{note.body}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const noteId = ownProps.location.pathname.split("/").pop();
  const note = state.notes[noteId];
  return {
    note,
  };
};

const mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    requestSingleNote: (noteId) => dispatch(requestSingleNote(noteId)),
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteShow);
