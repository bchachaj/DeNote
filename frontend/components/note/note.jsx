import React from 'react';
import { Route, withRouter,Switch } from 'react-router-dom';
import NoteShow from './note_show_container';
import NoteIndex from './note_index_container';
import {connect} from 'react-redux';
import CreateNote from './create_note_container';


class Note extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
      return (
        <div>
          <div className="note-container">

          <Route path="/notes/:noteId" component={NoteShow}/>
          <Switch>
            <Route exact path={'/notes/new'} component={CreateNote}/>
            <Route path={`/notes`} component={NoteIndex}/>
            <Route exact path={"/tags/:tag_name/notes"} component={NoteIndex}/>
          </Switch>

        </div>
        </div>
      );
    }
}

export default withRouter(Note);
