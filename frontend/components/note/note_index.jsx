import React from 'react';
import NoteIndexItem from './note_index_item';


class NoteIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllNotes();
  }

  deleteNote(note){
    this.props.deleteNote(note);
  }

  render(){
    const { notes } = this.props;
    const allNotes = notes.map((note,idx) =>
      <NoteIndexItem key={note.id} note={note} onClick={console.log('item clicked')}/>
    );
    return (
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
  );
  }
}


export default NoteIndex;
