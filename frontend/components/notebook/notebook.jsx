import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NotebookIndex from './notebook_index_container';
import {connect} from 'react-redux';
import NotebookShow from './notebook_show';
import CreateNotebook from './create_notebook_container';
import NotebookModal from './notebook_modals/notebook_modal';
import NoteShow from '../note/note_show_container';
import DeleteNotebook from './notebook_modals/delete_book_modal';
import CreateNotebookModal from './notebook_modals/create_notebook';
import CreateNote from './../note/create_note_container';




class Notebook extends React.Component {
  render() {
    return(
        <div>
          <div className="notebook-container">
          </div>
          <Switch>
          <Route exact path={'/notebooks/new'} component={CreateNotebookModal}/>
          <Route exact path="/notebooks" component={NotebookModal}/>
          <Route path="/notebooks/:notebookId/delete" component={DeleteNotebook}/>

        </Switch>
        <Route path="/notebooks/:notebookId" component={NotebookShow}/>
        {/* <Route exact path="/notebooks/:notebookId/notes/new" component={CreateNote}/> */}
        <Route exact path="/notebooks/:notebookId/notes/:noteId" component={NoteShow}/>
        </div>
      );
 }
}

export default withRouter(Notebook);
