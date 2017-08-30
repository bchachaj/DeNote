import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { requestSingleNotebook } from '../../actions/notebook_actions';
import NoteIndexItem from '../note/note_index_item';
import { selectAllNotes } from '../../reducers/selectors';
import { deleteNote } from '../../actions/note_actions';

class NotebookShow extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    let e = this.props.notes[0];
    if(e) {

    this.props.requestSingleNotebook(this.props.match.params.notebookId)
      .then(() => {
        this.props.history.push(`/notebooks/${this.props.notebook.id}/notes/${e.id}`)
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    let e = this.props.notes[0];
    if (e && (this.props.match.params.notebookId !==
      nextProps.match.params.notebookId))
    {
      this.props.requestSingleNotebook(nextProps.match.params.notebookId);
    }

  }

  noNotes(){
    return(
      <div className="no-note-zone">
        <div className="no-zone-inner">
          <i className="fa fa-file-text-o text-1" id="text-1"></i>
          <i className="fa fa-file-text-o text-2" id="text-2"></i>
          <h2>Click the <strong>+</strong> to add a note</h2>
          <p>Collet inspiration in this notebook</p>
        </div>
      </div>
    );
  }


  render() {
    let { notes, notebook } = this.props;
    if(!notes || !notebook) {
      return null;
    }
    let allNotes = notes.map((note, idx) =>
      <Link key={note.id}
            className="index-link"
            to={`/notebooks/${notebook.id}/notes/${note.id}`}>

           <NoteIndexItem note={note} delete={this.props.deleteNote} />

      </Link>
     );

     let renderThis;

     if(notes.length === 0) {
       renderThis = this.noNotes();
     } else {
       renderThis = allNotes;
     }



    return (
      <div className="notebook-show">
        <section className="note-index">
          <div className="note-index-header notebook-header">
            <h1 className="note-header">
              {notebook.title}
            </h1>
            <span className="note-count">
              <h4 className="note-header">{notes.length} notes</h4>
            </span>
          </div>
          <ul className="note-ul">
            {renderThis}
          </ul>
        </section>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  const notebookPath = parseInt(ownProps.match.params.notebookId);
  const notesState = selectAllNotes(state);

  //Grab notes belonging to this notebook
  const notes = notesState.filter((el) =>
    el.notebook_id === notebookPath
  );
  const notebook = state.notebooks[notebookPath];

  return {
    notes,
    notebook
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
