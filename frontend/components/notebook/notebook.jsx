import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import NotebookIndex from './notebook_index_container';
import {connect} from 'react-redux';
import NotebookShow from './notebook_show';
import CreateNotebook from './create_notebook_container';
import NotebookModal from './notebook_modals/notebook_modal';
import NoteShow from '../note/note_show';
import DeleteNotebook from './notebook_modals/delete_book_modal';

class Notebook extends React.Component {
  render() {
    return(
        <div>
          <div className="notebook-container">
          </div>

          <Route exact path="/notebooks" component={NotebookModal}/>
          <Route path="/notebooks/:notebookId/delete" component={DeleteNotebook}/>
          <Route path="/notebooks/:notebookId" component={NotebookShow}/>
          <Route path="/notebooks/:notebookId/notes/:noteId" component={NoteShow}/>
          <Route exact path={'/notebooks/new'} component={CreateNotebook}/>

        </div>
      );
 }
}

export default withRouter(Notebook);
