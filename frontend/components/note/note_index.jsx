import React from 'react';
import NoteIndexItem from './note_index_item';
import { Link, Route, withRouter } from 'react-router-dom';
import NoteShow from './note_show';

class NoteIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllNotes();
  }

  componentWillReceiveProps(nextProps){

    const pathId = nextProps.notes[0];
    if (this.props.notes.length === 0 && pathId.id && this.props.match.params.noteId !== pathId.id.toString()) {
      //^ checking if not already on same path..^
      this.props.history.push(`/notes/${pathId.id}`);
    }
  }


  render(){
    const { notes } = this.props;
    const allNotes = notes.map((note,idx) =>
    <Link key={note.id} className="index-link" to={`/notes/${note.id}`}>
      <NoteIndexItem note={note} delete={this.props.deleteNote}/>
     </Link>
   );

    return (
    <div>
    <section className="note-index">
      <div className="note-index-header">
        <h1 className="note-header">Notes</h1>
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


export default withRouter(NoteIndex);