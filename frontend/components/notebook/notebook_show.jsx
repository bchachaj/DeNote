import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestSingleNotebook } from '../../actions/notebook_actions';
import NoteIndexItem from '../note/note_index_item';
import { selectAllNotes } from '../../reducers/selectors';

class NotebookShow extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestSingleNotebook(this.props.match.params.notebookId);
  }
//will receive props
  componentWillReceiveProps(nextProps) {
    // const testParam = nextProps.match.params.noteId;
    // if(this.props.match.params.noteId !== nextProps.match.params.noteId) {
    //   this.props.requestSingleNote(nextProps.match.params.noteId);
    // }
    //
    // this.setState(nextProps.note);
  }


  render() {
    let { notes } = this.props;
    notes = notes.filter(el => el.notebook_id === this.props.id);
    let allNotes = notes.map((note, idx) =>
      <Link key={note.id} className="index-link" to={`/notes/${note.id}`}>
        <NoteIndexItem note={note} delete={this.props.deleteNote}/>
       </Link>
     );
    return (
      <div>
        <section className="note-index">
          <div className="note-index-header">
            <h1 className="note-header">
              ¡This.props.notebook.title¡
            </h1>
            <span className="note-count">
              <h4 className="note-header">{notes.length} notes</h4>
            </span>
          </div>
          <ul className="note-ul">
            {allNotes}
          </ul>
        </section>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const notes = selectAllNotes(state);
  return {
    notes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestSingleNotebook: id => dispatch(requestSingleNotebook(id))
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookShow);
