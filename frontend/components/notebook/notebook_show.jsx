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
    this.props.requestSingleNotebook(this.props.match.params.notebookId);
  }

//will receive props
  componentWillReceiveProps(nextProps) {

    if (this.props.match.params.notebookId !==
      nextProps.match.params.notebookId)
    {
    this.props.requestSingleNotebook(nextProps.match.params.notebookId);
    }

  }


  render() {
    let { notes, notebook } = this.props;
    let allNotes = notes.map((note, idx) =>
      <Link key={note.id} className="index-link" to={`/notebooks/${notebook.id}/notes/${note.id}`}>
        <NoteIndexItem note={note} delete={this.props.deleteNote}/>
       </Link>
     );

    return (
      <div className="notebook-show">
        <section className="note-index">
          <div className="note-index-header">
            <h1 className="note-header">
              {notebook.title}
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
  const notebookPath = parseInt(ownProps.match.params.notebookId);
  const notesState = selectAllNotes(state);

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
