import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import NoteShow from './note_show';
import NoteIndex from './note_index_container';
import {connect} from 'react-redux';
import CreateNote from './create_note_container';


class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderNew = '/notes/new';
    if (this.props.location === renderNew) {
      return <CreateNote/>;
    } else {
      return (
        <div>
          <NoteIndex/>
          <NoteShow/>

          <Route path="/notes/:noteId" component={NoteShow}/>
          <Route path={`/notes`} component={NoteIndex}/>
          <Route exact path={'/notes/new'} component={CreateNote}/>
        </div>
      );
    }
  }
}

export default withRouter(Note);
