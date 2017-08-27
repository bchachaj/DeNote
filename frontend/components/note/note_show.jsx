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
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }


  handleSubmit(e) {
    e.preventDefault();
    this.state.id = this.props.note.id;
    this.props.requestUpdateNote(this.state);
  }

  componentDidMount(){
    this.props.requestSingleNote(this.props.match.params.noteId);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.note === undefined && nextProps.note) {
      this.setState({
         title: nextProps.note.title,
         body: nextProps.note.body
       });
    }
    if(this.props.match.params.noteId !== nextProps.match.params.noteId) {
      this.props.requestSingleNote(nextProps.match.params.noteId);
    }
    this.setState(nextProps.note);
  }

  render(){
    let { note } = this.props;
    if (!note) {
      return null;
    }
    return (
      <div className="home-container">
      <div className="note-show-header">
        <div className="top-controls">
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </div>
        <div className="rich-text-controls"></div>
      </div>

      <div className="note-show note">
        <form onSubmit={this.handleSubmit}>
            <input type="text"
                   className="note-title"
                   onChange={this.update('title')}
                   value={this.state.title}/>

            <input type="textarea"
                   rows="40" cols="50"
                   className="note-body"
                   onChange={this.update('body')}
                   value={this.state.body}/>

            <input className="temp-note-save" type="submit"
                   value="Save"
                   />

        </form>
      </div>
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
