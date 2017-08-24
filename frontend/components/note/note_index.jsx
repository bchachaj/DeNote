import React from 'react';

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
      <li key={idx}>{note.title}</li>
    );
    return (
    <section className="note-index">
      <div className="note-index-header">
        <h1>Notes</h1>
        <span className="note-count">
          <h4>{notes.length} notes</h4>
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
