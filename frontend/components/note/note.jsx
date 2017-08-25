import React from 'react';
import { Route } from 'react-router-dom';
import NoteShow from './note_show';
import NoteIndex from './note_index_container';
import { connect } from 'react-redux';
import { requestSingleNote } from '../../actions/note_actions';
import { selectAllNotes } from '../../reducers/selectors';

import CreateNote from './create_note_container';

class Note extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (
  <div>
    <NoteIndex/>
    <NoteShow/>
    <CreateNote/>

    <Route path="/notes/:noteId" component={NoteShow}/>
    <Route path={`/notes`} component={NoteIndex}/>
    <Route exact path={'/notes/new'} component={CreateNote}/>
  </div>
);
}
}

export default Note;
