import React from 'react';
import NoteIndexItem from './note_index_item';
import { Link, Route, withRouter } from 'react-router-dom';
import NoteShow from './note_show';

class NoteIndex extends React.Component {


  componentDidMount(){
    this.props.requestAllNotes();
  }

  componentWillReceiveProps(nextProps){
    const test = nextProps.location;
    const pathId = nextProps.notes[0];
    if ((this.props.notes.length === 0) && pathId.id && (this.props.match.params.noteId !== pathId.id.toString())) {
      //^ checking if not already on same path..^
      this.props.history.push(`/notes/${pathId.id}`);
    }
  }

  noNotes(){
    return(
      <div className="no-note-zone">
        <div className="no-zone-inner">
          <h2>Click the + to add a note</h2>
          <p>Collet inspiration in this notebook</p>
        </div>
      </div>
    );
  }


  render(){
    const { notes } = this.props;
    const allNotes = notes.map((note,idx) =>
    <Link key={note.id} className="index-link" to={`/notes/${note.id}`}>
      <NoteIndexItem note={note}
                    delete={this.props.deleteNote}
                  />
     </Link>
   );

   let renderThis;

   if(notes.length === 0) {
     renderThis = this.noNotes();
   } else {
     renderThis = allNotes;
   }


    return (
    <div>
    <section className="note-index">
      <div className="note-index-header">
        <h1 className="note-header">Notes</h1>
        <span className="note-count">
          <h4 className="note-header">{notes.length} notes</h4>
        </span>
      </div>
      <div className="scrollbar">

      <ul className="note-ul">
        {renderThis}
      </ul>
    </div>
    </section>

  </div>


  );
  }
}


export default withRouter(NoteIndex);
